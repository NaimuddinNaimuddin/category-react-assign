import { useState } from "react"
import './Home.css'
import axios from "axios"
import { FaCheck } from "react-icons/fa"
import Category from "../components/Category"
import { BASE_URL } from '../constants'
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()
    const [categories, setCategories] = useState('')
    const [list, setList] = useState([])

    const handleChange = (e) => {
        setCategories(e.target.value)
    }

    const handleAdd = () => {
        if (categories === '') return

        const _new = { id: Math.random(), name: categories }
        setList([...list, _new])
        setCategories('')
    }

    const handleRemove = (categoryIndex) => {
        const _deletedArr = list.filter((item, index) => index !== categoryIndex)
        setList(_deletedArr)
    }

    const handleApi = () => {
        const apiUrl = `${BASE_URL}/api/add-categories`
        const data = list
        axios.post(apiUrl, data)
            .then(res => {
                console.log(res, "res")
                if (res.data.code == 200) {
                    alert('Added Successfully.')
                    navigate('/list')
                }
            })
            .catch(err => {
                console.log(err, "err")
            })
    }

    return (
        <>
            <div className="card">
                <input
                    placeholder="Category Name.."
                    className="input-box"
                    value={categories}
                    onChange={handleChange}
                />
                <button
                    onClick={handleAdd}
                    className="btn">
                    <FaCheck className="fa-check" />
                </button>

            </div>
            <div className="list-card">
                {
                    list && list.length > 0 &&
                    list.map((category, categoryIndex) => {
                        return (
                            <Category
                                key={Math.random()}
                                category={category}
                                categoryIndex={categoryIndex}
                                handleRemove={handleRemove}
                            />
                        )
                    })
                }
            </div>
            <div className="card">
                {list && list.length > 0 &&
                    (<button
                        onClick={handleApi}>
                        SAVE
                    </button>)}
            </div>
        </>
    )
}

export default Home
