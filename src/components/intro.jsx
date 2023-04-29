import React from "react";

function Intro() {
    return(
        <div className="flex items-center 
        justify-center flex-col text-center 
        pt-20 pb-6">
            <h1 className="text-4xl 
            md:text-7xl mb-1 md:mb-3 font-bold">Robert</h1>
            <p className="text-base md:text-xl
            mb-3 font-medium">Software Engineer</p>
            <p className="text-sm max-w-xl mb-5
            font-bold"> 
            This is my entire bio. Blah Blah Bla{' '}
                <a
                    href="https://github.com/RobertFontan"
                    target="_blank"
                    className="text-cyan-600 hover:underline 
                    underline-offset-2 decoration-2
                    decoration-red-600"
                    rel="noreferrer noopener"
                >
                    Example link in bio
                </a>{' '}
            hBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah Blah
            </p>
        </div>
    )
}

export default Intro;