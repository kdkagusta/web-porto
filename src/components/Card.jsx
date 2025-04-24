const Card = ({ title, description, image, link }) => {
    return (
        <div className="card" style={{width: 18}}>
            <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={link} className="btn btn-primary">read more</a>
                </div>
        </div>
    );
}

export default Card