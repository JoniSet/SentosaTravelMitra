import React from 'react';
import Home from '../assets/images/ic_home.svg';
import Jamaah from '../assets/images/ic_jamaah.svg';
import Profil from '../assets/images/ic_profil.svg';
import BGGradient from '../assets/images/bg_gradient_header.png';
import BGBitton from '../assets/images/bg_button.png';
import LogoMitra from '../assets/images/logo_sentosa_travel.png';
import IcNotif from '../assets/images/ic_notif.svg';
import IcKomisi from '../assets/images/ic_komisi.svg';
import IcPeforma from '../assets/images/ic_peforma.svg';
import IcToalJamaah from '../assets/images/ic_total_jamaah.svg';
import IcCopy from '../assets/images/ic_copy.svg';
import IcKanan from '../assets/images/ic_kanan.svg';
import IcPusatBantuan from '../assets/images/ic_pusat_bantuan.svg';
import IcRekening from '../assets/images/ic_rekening.svg';
import IcFaq from '../assets/images/ic_faq.svg';
import IcLogout from '../assets/images/ic_logout.svg';
import BgRangking from '../assets/images/bg_rangking.png';
import BgStatusBar from '../assets/images/bg_statusbar.png';
import IcBackDark from '../assets/images/ic_back_dark.svg';
import IcBackLight from '../assets/images/ic_back_light.svg';
import IcAgendaHijau from '../assets/images/ic_agenda_hijau.svg';
import IcLayananCs from '../assets/images/ic_layanan_cs.png';
import IcWa from '../assets/images/ic_wa.svg';
import IcTelepon from '../assets/images/ic_telepon.svg';
import IcPencarian from '../assets/images/ic_pencarian.svg';
import IcHistory from '../assets/images/ic_history.svg';
import IcTambahJamaah from '../assets/images/ic_tambah_jamaah.svg';
import IcCeklis from '../assets/images/ic_ceklist.svg';
import IcSuksesOval from '../assets/images/ic_sukses_oval.svg';
import IcEditRekening from '../assets/images/ic_edit_rekekning.svg';
import IcErrorOval from '../assets/images/ic_error_oval.svg';
import ImgHaji from '../assets/images/img_jahi.jpg';
import IcDataDiri from '../assets/images/ic_data_diri.svg';
import IcDataUmroh from '../assets/images/ic_data_umroh.svg';
import IcDataTabungan from '../assets/images/ic_data_tabungan.svg';
import IcDown from '../assets/images/ic_down.svg';
import ImgPasport from '../assets/images/img_foto_pasport.png';
import ImgVaksin from '../assets/images/img_foto_vaksin.png';


export const Icons = {
    Home,
    Jamaah,
    Profil,
    BGGradient,
    BGBitton,
    LogoMitra,
    IcNotif,
    IcKomisi,
    IcPeforma,
    IcToalJamaah,
    IcCopy,
    IcKanan,
    IcPusatBantuan,
    IcRekening,
    IcFaq,
    IcLogout,
    BgRangking,
    BgStatusBar, 
    IcBackDark, 
    IcBackLight, 
    IcAgendaHijau,
    IcLayananCs,
    IcWa,
    IcTelepon,
    IcPencarian,
    IcHistory,
    IcTambahJamaah, 
    IcCeklis, 
    IcSuksesOval,
    IcEditRekening, 
    IcErrorOval, 
    ImgHaji, 
    IcDataDiri, 
    IcDataTabungan, 
    IcDataUmroh,
    IcDown,
    ImgPasport,
    ImgVaksin
}

const Icon = ({ type, name, color, size = 24, style }) => {
    const fontSize = 24;
    const Tag = type;
    return (
        <>
            {type && name && (
                <Tag name={name} size={size || fontSize} color={color} style={style} />
            )}
        </>
    )
}

const Icon2 = ({ type, name, color, size = 50, style }) => {
    const fontSize = 50;
    const Tag = type;
    return (
        <>
            {type && name && (
                <Tag name={name} color={color} style={style} />
            )}
        </>
    )
}

export default Icon