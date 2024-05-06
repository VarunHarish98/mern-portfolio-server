import React from 'react'
import { headerName, resumeBtnContent, resumeLink } from '../utils/constants'
import { useSelector } from 'react-redux'

const Header = () => {
    const { portfolioData } = useSelector(state => state.root)
    // const {intros} = portfolioData
    // const {firstName, middleName, lastName} = intros
    const handleButtonClick = () => {
        window.open(resumeLink, '_blank');
    }
    return (
        <header className='p-5 bg-primary flex justify-between'>
            <div className='w-auto text-4xl sm:text-xl text-white sm:p-2 p-5 font-display'>
                {`${"Varun"} ${"Hosadurga"} ${"Harish"}`}
            </div>
            {/* <button onClick={handleButtonClick} className='bg-violet-600 hover:bg-violet-700 text-white sm:mx-3 sm:px-2 sm:text:xl mx-4 px-4 h-12 rounded-lg'>
                {resumeBtnContent}
            </button> */}
        </header>
    )
}

export default Header