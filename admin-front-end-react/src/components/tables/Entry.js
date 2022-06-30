import DataManager from "./data/DataManager";

const Entry = (props) => {
    let data = props.entryData;
    let id = DataManager.getStringId(data);

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${id}`} aria-expanded="true" aria-controls={`collapse-${id}`}>
                    {DataManager.getName(data)}
                </button>
            </h2>
            <div id={`collapse-${id}`} className="accordion-collapse collapse show" aria-labelledby="headingOne"
                 data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {DataManager.display(data)}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                        Edit
                    </button>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {DataManager.display(data)}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Entry;