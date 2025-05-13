import { useTheme } from '../../context/ThemeContext.jsx'

function Card({ image, title, description }) {
    const { isDark } = useTheme()
    return (
        <div className={`max-w-sm rounded overflow-hidden shadow-lg transition-colors ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <img
                className="w-full h-48 object-cover"
                src={image}
                alt={title}
            />
            <div className="px-6 py-4">
                <div className={`font-bold text-xl mb-2 transition-colors ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                    {title}
                </div>
                <p className={`text-base transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Card
