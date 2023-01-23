import React from 'react'
import { Link} from "react-router-dom";
import classnames from "classnames";


const CourseContent = (props) => {
  // const {id} = useParams();
  return (
    <Link to={`/course/${props.url}/${props.id}`} className="w-full my-1">
        <div className={classnames("w-full py-1 flex justify-center items-center", {" bg-purple-300 text-red-500 font-semibold":props.isActive,})}
        >
            <span className='text-xl font-semibold text-center'>{props.title}</span>
        </div>
    </Link>
  )
}

export default CourseContent;