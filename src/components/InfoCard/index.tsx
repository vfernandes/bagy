import React from 'react';

interface InfoCardProps {
    title: string,
    resume: string
}

const InfoCard: React.FC<InfoCardProps> = (props) => {
    return (
        <div className="col-6 col-lg-3">
            <div className="content-styled interactive">
                <span className="title">{props.title}</span>
                <span className="resume">{props.resume}</span>
            </div>
        </div>
    );
}

export default InfoCard;