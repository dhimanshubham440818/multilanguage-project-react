import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();
    return (
        <>
            <div className="container mt-5  p-2">
            <h1>{t('What is Linux?')}</h1>
            <p>{t('Linux is a Unix-like, open source and community-developed operating system (OS) for computers, servers, mainframes, mobile devices and embedded devices. It is supported on almost every major computer platform, including x86, ARM and SPARC, making it one of the most widely supported operating systems.')}</p>               
            <h1>{t('How is the Linux operating system used?')}</h1>
            <p>{t('Every version of the Linux OS manages hardware resources, launches and handles applications, and provides some form of user interface. The enormous community for developers and wide range of distributions means that a Linux version is available for almost any task, and Linux has penetrated many areas of computing. For example, Linux has emerged as a popular OS for web servers such as Apache, as well as for network operations, scientific computing tasks that require huge compute clusters, running databases, desktop and endpoint computing, and running mobile devices with OS versions like Android.')}</p>
            </div>
        </>
    )
}