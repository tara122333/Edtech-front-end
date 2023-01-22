import React from 'react'


const Video = (props) => {
  return (
    <>
        <div>
            <div className='relative pt-[48%] pl-0 pr-0 pb-0 lg:pt-[54%]'>
                {/* <iframe src={`https://player.vimeo.com/video/${props.video}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=122963`} frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className='absolute top-0 left-0 w-full h-full lg:top-6'>
                </iframe> */}
                <iframe src="https://drive.google.com/file/d/1DCar5alNYofY7Q7XM5xhVxfhDTqni3ux/preview"  frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className='absolute top-0 left-0 w-full h-full lg:top-6'>
                </iframe>
            </div>
        </div>

    </>
  )
}

export default Video