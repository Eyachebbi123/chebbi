import React from 'react'

function Scrool() {
    return (
        <>
            <div className="loader-wrap">
                <div className="preloader">
                    <div className="preloader-close">x</div>
                    <div id="handle-preloader" className="handle-preloader">
                        <div className="animation-preloader">
                            <div className="spinner"></div>
                            <div className="txt-loading">
                                <span data-text-preloader="D" className="letters-loading">
                                    D
                                </span>
                                <span data-text-preloader="E" className="letters-loading">
                                    E
                                </span>
                                <span data-text-preloader="L" className="letters-loading">
                                    L
                                </span>
                                <span data-text-preloader="I" className="letters-loading">
                                    I
                                </span>
                                <span data-text-preloader="C" className="letters-loading">
                                    C
                                </span>
                                <span data-text-preloader="I" className="letters-loading">
                                    I
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scrool