import React from 'react'

const EmbedsPage = ({styles}) => {
    console.log(styles);
  return (
    
    <div >
      <iframe style={styles} src="https://www.youtube.com/embed/fhOPXm6HWLY" title="Urban Reach working model || Agritech company"  allowFullScreen>
        </iframe>
    </div>
  )
}

export default EmbedsPage;