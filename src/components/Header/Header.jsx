import PropTypes from 'prop-types';
export default function Header({ title }) {
    return (
        <>
            <div className="flex justify-center items-center h-28">
                <h1 className="text-4xl text-orange-200 xl:mt-4">{title}</h1>
            </div>
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string,
};