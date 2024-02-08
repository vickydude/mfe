import React, {useEffect, useRef} from 'react';
import {mount} from 'marketing/MarketingIndex';

export default () => {

    const ref = useRef(null);

    useEffect(() => {
        console.log(ref);
        mount(ref.current)
    })

    return <div ref={ref}></div>
}