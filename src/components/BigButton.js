function BigButton(props) {
    return (
        <div className="bigbutton d-flex">
            {props.icon}
            <div className="ms-3">
                <h5>{props.value}</h5>
                <p className="text-muted">{props.name}</p>
            </div>
        </div>
    )
}

export default BigButton;