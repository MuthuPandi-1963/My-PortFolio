import { Star, Star_fill } from "../icons/Icon";


export default function Review_Star( {className,star,setStar,stars} ) {

    function HandleStar(id, event) {
        setStar((prevStar) => {
            let newStar = [];
            for (let i = 0; i < star.length; i++) {
                if (i <= id) newStar[i] = true;
                else newStar[i] = false;
            }
            return newStar;
        });
    }
    return (
        <div
            className={`star flex justify-center items-center ${className} bg-transparent`}
        >
            {star.map((item, id) => (
                <button
                    key={id}
                    onClick={() => {
                        star[id] == true ? setStar(stars) : HandleStar(id);
                    }}
                >
                    {item ? <Star_fill color={"Orange"} /> : <Star/>}
                </button>
            ))}
        </div>
    );
}
