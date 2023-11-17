import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react'
export default function NavLink() {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState("English");
    const handleChange = (e) => {
        setLang(e.target.value)
    }
    useEffect(()=>{
        i18n.changeLanguage(lang)
    },[lang])
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
            <a class="navbar-brand" href="#"><h1>{t("NavBar")}</h1></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">{t("Home")}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{t("Features")}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{t("Pricing")}</a>
                    </li>
                    <li class="nav-item">
                        <select class="nav-link text-dark" value={lang} onChange={(e)=>{handleChange(e)}}>
                            <option value="en">English</option>
                            <option value="hi">हिंदी</option>
                        </select>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}