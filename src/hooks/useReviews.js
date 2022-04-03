import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(json => setReviews(json));
    }, []);
    return [reviews, setReviews];
}

export default useReviews;