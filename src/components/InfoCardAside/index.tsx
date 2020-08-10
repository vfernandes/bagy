import React from 'react';

interface InfoCardProps {
    title: string,
    value: string,
    customClass?: string
}

const InfoCardAside: React.FC<InfoCardProps> = (props) => {
    return (
        <div className="info">
            <span className="title">{props.title}</span>
            <span className={`value ${props.customClass}`}>{props.value}</span>
        </div>
    );
}

export default InfoCardAside;