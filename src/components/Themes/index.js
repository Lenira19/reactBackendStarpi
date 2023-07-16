const Themes = ({Theme,setTheme}) => {


    return (

        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Theme on\off    </span>
                <input type="checkbox"  onChange ={()=>setTheme(!Theme)} className="checkbox checkbox-primary" />
            </label>
        </div>
        

    )
};

export default Themes;