import "./Complexity.css"

const Complexity = ({ complexity }) => {
    switch (complexity) {
        case 1:
            return <h5 className="recipy-complexity">Easy</h5>;
        case 2:
            return <h5 className="recipy-complexity medium">Medium</h5>;
        case 3:
            return <h5 className="recipy-complexity hard">Hard</h5>;
        default:
            return <h5 className="recipy-complexity">Easy</h5>;
    }
};

export default Complexity;
