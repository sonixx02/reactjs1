import React from "react";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setlikedCourses = props.setlikedCourses;
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setlikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("like removed");
    } else {
      if (likedCourses.length == 0) {
        setlikedCourses([course.id]);
      } else {
        setlikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked sucessfully");
    }
  }

  const imageUrl = course && course.image && course.image.url;

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 relative bg-blue-900 rounded-md overflow-hidden m-2">
      <div className="relative">
        <img
          src={imageUrl}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="w-8 h-8 bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            <FcLike fontSize="1.75rem" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-bold text-lg mb-2">{course.title}</p>
        <p className="text-white">{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
