import React, { useState } from 'react'

function Section({dark}) {
    // const [dark, setDark] = useState(false);

    return (
        <section className='h-screen w-screen' style={{backgroundColor: dark ? '#13401A' : '#F2F2F2'}}>
            
        </section>
    )
}

export default Section;
