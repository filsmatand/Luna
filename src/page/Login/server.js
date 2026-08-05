const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs-extra');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 5000;
const DB_FILE = path.join(__dirname, 'db.json');
const UPLOADS_DIR = path.join(__dirname, 'uploads');

// Ensure uploads directory exists
fs.ensureDirSync(UPLOADS_DIR);

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(UPLOADS_DIR));

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Helper to read DB
const readDB = async () => {
  try {
    const data = await fs.readJson(DB_FILE);
    return data;
  } catch (error) {
    return { users: [] };
  }
};

// Helper to write DB
const writeDB = async (data) => {
  await fs.writeJson(DB_FILE, data, { spaces: 2 });
};

// Register endpoint with profile picture
app.post('/api/register', upload.single('profilePicture'), async (req, res) => {
  const { fullName, email, password } = req.body;
  const profilePicture = req.file ? `/uploads/${req.file.filename}` : null;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
  }

  if (!profilePicture) {
    return res.status(400).json({ message: 'La photo de profil est obligatoire.' });
  }

  const db = await readDB();
  
  // Check if user already exists
  const userExists = db.users.find(u => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
  }

  // Add new user
  const newUser = {
    id: Date.now(),
    fullName,
    email,
    password, 
    profilePicture,
    createdAt: new Date().toISOString()
  };

  db.users.push(newUser);
  await writeDB(db);

  res.status(201).json({ 
    message: 'Inscription réussie !', 
    user: { fullName, email, profilePicture } 
  });
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Veuillez remplir tous les champs.' });
  }

  const db = await readDB();
  const user = db.users.find(u => u.email === email);

  if (!user) {
    return res.status(401).json({ message: 'Utilisateur non trouvé.' });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: 'Mot de passe incorrect.' });
  }

  res.status(200).json({ 
    message: 'Connexion réussie !', 
    user: { fullName: user.fullName, email: user.email, profilePicture: user.profilePicture } 
  });
});

// Social Login endpoint
app.post('/api/social-login', async (req, res) => {
  const { fullName, email, provider } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email manquant.' });
  }

  const db = await readDB();
  let user = db.users.find(u => u.email === email);

  if (!user) {
    user = {
      id: Date.now(),
      fullName: fullName || 'Utilisateur Google',
      email: email,
      provider: provider || 'google',
      isSocial: true,
      profilePicture: 'https://i.pravatar.cc/150?u=' + email, // Default for social
      createdAt: new Date().toISOString()
    };
    db.users.push(user);
    await writeDB(db);
  }

  res.status(200).json({ 
    message: `Connecté via ${provider || 'Google'}`, 
    user: { fullName: user.fullName, email: user.email, profilePicture: user.profilePicture } 
  });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
