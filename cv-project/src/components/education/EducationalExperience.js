import { useState } from 'react';

export default function FormalEducation() {
    let bachelor = {
            bachUniversity: 'Universidad Nacional de La Plata',
            bachSchool: 'Facultad de Ciencias Exactas',
            bachCareer: 'Bachelor\'s degree in Biotechnology and Molecular Biology',
            bachStatus: 'Complete',
            bachDuration: '2013-2018',
        };
        
    let doctorate = {
            docUniversity: 'Universidad Nacional de La Plata',
            docInstitute: 'Institute of Biotecnology and Molecular Biology',
            docCareer: 'PhD in Biotechnology and Molecular Biology',
            docStatus: 'Abandoned',
            docDuration: '2018-2022',
            docTheme: 'Developement of molecular strategies for the control of the citrus disease HuangLongBing.'
        };

    const [ isEditingBach, setEditingBach ] = useState(false);
    const [ isEditingPhd, setEditingPhd ] = useState(false);
    const [ bach, setBach ] = useState(bachelor);
    const [ phd, setPhd ] = useState(doctorate);

    let bachStructure;
    let phdStructure;

    if (isEditingBach) {
        bachStructure = (
            <form className='cv-form'>
                <label>Career: </label>
                <input name='bachCareer' value={bach.bachCareer} onChange={handleInfo}></input>
                <br />
                <label>Institution: </label>
                <input name='bachSchool' value={bach.bachSchool} onChange={handleInfo}></input>
                , 
                <input name='bachUniversity' value={bach.bachUniversity} onChange={handleInfo}></input>
                <br />
                <label>Status: </label>
                <input name='bachStatus' value={bach.bachStatus} onChange={handleInfo}></input>
                <br />
                <label>Duration: </label>
                <input name='bachDuration' value={bach.bachDuration} onChange={handleInfo}></input>
            </form>
        );
    } else {
        bachStructure = (
            <div>
                <b>Career: </b> {bach.bachCareer}
                <br/>
                <b>Institute: </b> {bach.bachSchool}, {bach.bachUniversity}
                <br/>
                <b>Status: </b> {bach.bachStatus}
                <br/>
                <b>Duration: </b> {bach.bachDuration}
                <br/>
            </div>
    )};
        
    if (isEditingPhd) {
        phdStructure = (
            <form className='cv-form'>
                <label>Career: </label>
                <input name='docCareer' value={phd.docCareer} onChange={handleInfo}></input>
                <br />
                <label>Institution: </label>
                <input name='docInstitute' value={phd.docInstitute} onChange={handleInfo}></input>
                 - 
                <input name='docUniversity' value={phd.docUniversity} onChange={handleInfo}></input>
                <br />
                <label>Theme: </label>
                <input name='docTheme' value={phd.docTheme} onChange={handleInfo}></input>
                <br />
                <label>Status: </label>
                <input name='docStatus' value={phd.docStatus} onChange={handleInfo}></input>
                <br />
                <label>Duration: </label>
                <input name='docDuration' value={phd.docDuration} onChange={handleInfo}></input>
            </form>
        );
    } else {
        phdStructure = (
            <div>
                <b>Career: </b> {phd.docCareer}
                <br/>
                <b>Institute: </b> {phd.docInstitute} - {phd.docUniversity}
                <br/>
                <b>Theme: </b> {phd.docTheme}
                <br/>
                <b>Status: </b> {phd.docStatus}
                <br/>
                <b>Duration: </b> {phd.docDuration}
                <br/>
            </div>
    )};


    function handleInfo(e) {
        setBach({
            ...bach,
            [e.target.name]: e.target.value,
        });

        setPhd({
            ...phd,
            [e.target.name]: e.target.value,
        })
    };
    
    return (
        <div>
            <div className='principal'>
                <h1 className='principal-title'>Education</h1>
                <h2 className='section-title'>Degrees</h2>
                <hr/>
                <h3 className='section-title'>Undergraduate Degree</h3>
                { bachStructure }
                <button onClick={() => {setEditingBach(!isEditingBach)}}>
                {isEditingBach
                ? 'Save Information'
                : 'Edit Information'
                }
                </button>
                <br />
                <h3 className='section-title'>Postgraduate Degree</h3>
                { phdStructure }
                <button onClick={() => {setEditingPhd(!isEditingPhd)}}>
                {isEditingPhd
                ? 'Save Information'
                : 'Edit Information'
                }
                </button>
            </div>
        </div>
    );
}