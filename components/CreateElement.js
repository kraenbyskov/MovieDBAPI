
const CreateElement = ({ elmt = "div", content = "", Attribute, ID, className, src = "" }) => {

    let CreateElmt = document.createElement(elmt);

    if (elmt === "img") {
        if (src) {
            CreateElmt.src =  src
        } else {
            CreateElmt.src = "../image/fallback.jpeg"
        }
    }

    if (ID) {
        CreateElmt.setAttribute("id", ID)
    }
    if (elmt === "a") {
        CreateElmt.href = src
    }
    CreateElmt.innerHTML = content
    if (className) {
        CreateElmt.classList.add(className);
    }
    if (Attribute) {
        Attribute.map(({ type, input }) => {
            CreateElmt.setAttribute(type, input)
        })

    }

    return CreateElmt;
};

export default CreateElement;