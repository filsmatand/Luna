export default function Tags({
  tags = [],
}) {

  const tagColors = [
    "text-blue-400 bg-blue-500/10 border-blue-500/20",
    "text-purple-400 bg-purple-500/10 border-purple-500/20",
    "text-green-400 bg-green-500/10 border-green-500/20",
    "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    "text-pink-400 bg-pink-500/10 border-pink-500/20",
  ];


  return (
    <div
      className="
        flex
        flex-wrap
        gap-2
      "
    >

      {
        tags.map(
          (tag, index) => (

            <span
              key={index}
              className={`
                px-3
                py-1
                rounded-full
                border
                text-xs
                font-medium
                transition
                hover:scale-105
                ${
                  tagColors[index % tagColors.length]
                }
              `}
            >
              {tag}
            </span>

          )
        )
      }

    </div>
  );
}