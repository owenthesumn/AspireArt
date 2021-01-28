import React, { useContext } from 'react'

function Section({pageClass, pageContent}) {
    return (
        <section className={pageClass}>
            {pageContent}
        </section>
    )
}

export default Section;
