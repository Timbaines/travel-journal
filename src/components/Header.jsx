import travelLogo from '../../public/mtj-logo.svg';

export default function Header() {
    return (
        <header className="header">
            <img src={travelLogo} className="logo" alt="my travel journal logo" />
        </header>
    )
}