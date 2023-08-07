import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/stack-overflow.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt='pen' width='12px'/>
                <p>Observability is key to the future of software (and your DevOps career)</p>
            </div>
            <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='12px' />
            <p>Podcast 374: How valuable is your screen name?</p>
            </div>
        </div>    
        <h4>Featured on meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt='pen' width='12px'/>
                <p>Review queue workflows - final release...</p>
            </div>
            <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width='12px' />
            <p>please welcome Valued Associates: #958-V2Blast #959 - spencerG</p>
            </div>
            <div className='right-sidebar-div-2'>
            <img src={blacklogo} alt="pen" width='12px' />
            <p>Outdated Answers: accepted answer is now unpinned on stack overflow</p>
            </div>
        </div>    
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>38</p>
                <p>Why was the spam flag declined. yet the question marked as spam?</p>
            </div>
            <div className='right-sidebar-div-2'>
            <p>20</p>
            <p>What is the best course of action when the user has high enough rep to..</p>
            </div>
            <div className='right-sidebar-div-2'>
            <p>14</p>
            <p>Is the link to the "How to ask" help page a useful comment?</p>
            </div>
        </div>
    </div>
  )
}

export default Widget
