import {
    useEffect,
    useRef,
    useState
} from "react";

import Editor from "@monaco-editor/react";

import { editorTheme } from "../style/monacoTheme";



const DEFAULT_CODE = {

javascript:
`function solution(){

    // Votre code ici

}

solution();`,


python:
`def solution():

    # Votre code ici

solution()
`,


java:
`class Solution {

    public static void main(String[] args){

    }

}`

};




export default function CodeEditor({

    language = "javascript",

    theme = "DevSchool",

    onRun

}) {



    const editorRef = useRef(null);

    const containerRef = useRef(null);



    const [isMobile,setIsMobile] = useState(
        window.innerWidth < 768
    );



    const storageKey =
    `challenge-code-${language}`;




    const [code,setCode] = useState(()=>{


        return (

            localStorage.getItem(storageKey)

            ||

            DEFAULT_CODE[language]

            ||

            ""

        );


    });







    /*
        Responsive detection
    */

    useEffect(()=>{


        function handleResize(){


            setIsMobile(
                window.innerWidth < 768
            );


            editorRef.current?.layout();


        }



        window.addEventListener(
            "resize",
            handleResize
        );



        return()=>{


            window.removeEventListener(
                "resize",
                handleResize
            );


        };


    },[]);







    /*
        Change language
    */

    useEffect(()=>{


        const saved =
        localStorage.getItem(storageKey);



        setCode(

            saved

            ||

            DEFAULT_CODE[language]

            ||

            ""

        );


    },[language]);








    /*
        Save code
    */

    useEffect(()=>{


        localStorage.setItem(

            storageKey,

            code

        );


    },[code,storageKey]);








    function handleEditorDidMount(
        editor,
        monaco
    ){


        editorRef.current = editor;



        monaco.editor.defineTheme(

            "DevSchool",

            editorTheme

        );



        monaco.editor.setTheme(
            theme
        );



        setTimeout(()=>{


            editor.layout();


        },200);






        editor.addCommand(

            monaco.KeyMod.CtrlCmd |

            monaco.KeyCode.Enter,


            ()=>{


                onRun ?

                onRun(code)

                :

                console.log(
                    "Run Code"
                );


            }

        );


    }








    /*
        ResizeObserver
    */

    useEffect(()=>{


        if(
            !containerRef.current
        )

        return;



        const observer =
        new ResizeObserver(()=>{


            editorRef.current?.layout();


        });



        observer.observe(

            containerRef.current

        );



        return()=>{


            observer.disconnect();


        };


    },[]);









    return (


<div

ref={containerRef}

className="
h-full
w-full
overflow-hidden
"

>


<Editor


height="100%"

width="100%"



language={language}


theme={theme}



value={code}



onChange={(value)=>{

setCode(value || "")

}}



onMount={handleEditorDidMount}





options={{



fontFamily:
"JetBrains Mono",



/*
 Responsive font
*/

fontSize:

isMobile

?

13

:

16,




lineHeight:

isMobile

?

20

:

26,





minimap:{

enabled:
!isMobile

},





automaticLayout:false,





scrollBeyondLastLine:false,





wordWrap:"on",





bracketPairColorization:{

enabled:true

},





guides:{

indentation:true

},





quickSuggestions:true,





suggestOnTriggerCharacters:true,





formatOnPaste:true,





formatOnType:true,





tabSize:2,





cursorBlinking:
"smooth",





smoothScrolling:true,





renderWhitespace:
"selection",





renderLineHighlight:
"all",





roundedSelection:true,





padding:{


top:

isMobile

?

8

:

15,


bottom:

10


},





/*
 Mobile optimisation
*/


mouseWheelZoom:true,



overviewRulerLanes:

isMobile

?

0

:

3,



folding:

!isMobile



}}


/>



</div>


    );

}