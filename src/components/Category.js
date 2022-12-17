import { FaTimes } from "react-icons/fa"

function Category(props) {
    let { category: { name = '' } = {},
        categoryIndex = '',
        handleRemove } = props
    return (
        <>
            <div className="category">
                <div> {name}</div>
                <button
                    onClick={() => handleRemove && handleRemove(categoryIndex)}
                    className="cross-btn">
                    <FaTimes className="fa-cross" />
                </button>
            </div>
        </>
    )
}

export default Category
