import React from 'react';



// Laliga Kits
const LaligaKits = [ 
    {
        id: 1,
        name: 'Atletico Madrid home kit 2020',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862546/Jersey-sweden/Barca/atmadrid-1-removebg-preview_mylwks.webp'

    },
    {
        id: 2,
        name: 'Atletico Madrid Away kit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862545/Jersey-sweden/Atletico/atletico-1-removebg-preview_qmsmmd.webp'

    },
    {
        id: 3,
        name: 'Barcelona home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862550/Jersey-sweden/Barca/barca2023_nivpbb.webp'
    },
    {
        id: 4,
        name: 'Barcelona home kit 2014',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862548/Jersey-sweden/Barca/barca_futvpk.webp', 
    },
    {
        id: 5,
        name: 'Barcelona classic kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862550/Jersey-sweden/Barca/barcaclassis_dflbvy.webp'
    },
    {
        id: 6,
        name: 'Real Madrid fantasy kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862538/Jersey-sweden/Real%20Madrid/file_q3nx6w.png'
    },
    {
        id: 7,
        name: 'Real madrid homekit 2023',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862535/Jersey-sweden/Real%20Madrid/rmadrid-1-removebg-preview_1_pygm2q.webp'   
    },
    {
        id: 8,
        name: 'Real Madrid homekit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862535/Jersey-sweden/Real%20Madrid/real_madrid_1-removebg-preview_3_wifteb.webp'
    },
    {
        id: 9,
        name: 'Real Madrid kit 2017',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862533/Jersey-sweden/Real%20Madrid/realMadrid_ag3g0c.webp'
    },
    {
        id: 10,
        name: 'Real Madrid away kit 2023',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862532/Jersey-sweden/Real%20Madrid/madrid002_akjp3k.webp'
    }
]

// Primier League Kits
const PrimierLeagueKits =  [
    {
        id: 1,
        name: 'Arsenal home kit 2023',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862475/Jersey-sweden/Arsenal/HZ2085_1_APPAREL_Photography_FrontView_transparent_500x_rzmxlc.webp'
    },
    {
        id: 2,
        name: 'Arsenal away kit 2023',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862475/Jersey-sweden/Arsenal/arsenal_23_24_keeper_kit__6_-removebg-preview_owgdmd.png'
    },
    {
        id: 3,
        name: 'Arsenal third kit 2023',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862474/Jersey-sweden/Arsenal/5f9676b20779874841404af02e03b045_csdvuc.png'
    },
    {
        id: 4,
        name: 'Arsenal fourth kit 2023',
        image:'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862472/Jersey-sweden/Arsenal/-medium_x3mppa.webp'
    },
    {
        id: 5,
        name: 'Liverpool fantasy kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862503/Jersey-sweden/Liverpool/Liverpool-Away-Kit-2022-23-season-LEAKED-scaled-removebg-preview_w1gbm7.webp'
    },
    {
        id: 6,
        name: 'Liverpool away kit 2023',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862502/Jersey-sweden/Liverpool/liverpool-2021-22-nike-away-kit-1-removebg-preview_jtk6vh.webp'
    },
    {
        id: 7,
        name: 'Liverpool away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862501/Jersey-sweden/Liverpool/cmV2aWV3ICgyKS52MS5wbmc_--medium_nx2kls.webp'
    },
    {
        id: 8,
        name: 'Liverpool away kit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862501/Jersey-sweden/Liverpool/9496_Liverpool_away4-removebg-preview_hrenwt.png'
    },
    {
        id: 9,
        name: 'Liverpool classic kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862499/Jersey-sweden/Liverpool/13b983_3fc62ed14f514d739510c7871be5a8b3_mv2_cyr0qz.webp'
    },
    {
        id:10,
        name: 'Manchester City homekit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862510/Jersey-sweden/manCity/Untitled_design__67_-removebg-preview_600x_tw0ssh.webp'
    },
    {
        id: 11,
        name: 'Manchester City homekit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862509/Jersey-sweden/manCity/mancity-1-removebg-preview_nhly8j.webp'
    },
    {
        id: 12,
        name: 'Manchester City homekit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862506/Jersey-sweden/manCity/1653539889294488752_zul8cm.png'
    },
    {
        id: 13,
        name: 'Manchester City away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862505/Jersey-sweden/manCity/110626_S_kki7jk.png'
    },
    {
        id: 14,
        name: 'Manchester City away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862504/Jersey-sweden/manCity/0216087_manchester-city-2324-away-jersey_500_nk8e9k.png'
    },
    {
        id: 15,
        name: 'Manchester United homekit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862508/Jersey-sweden/manCity/LXByZXZpZXcudjEuY3JvcHBlZC5wbmc_--medium_vsoh21.webp'
    },
    {
        id:16,
        name:'Manchester United homekit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862516/Jersey-sweden/ManUnited/MANU_0607_HOME-removebg-preview_fagmyy.webp'
    },
    {
        id: 17,
        name: 'Manchester United away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862515/Jersey-sweden/ManUnited/manuaway1_cagnet.png'
    },
    {
        id: 18,
        name: 'Manchester United home kit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862514/Jersey-sweden/ManUnited/image_39c4c744-9859-4ef8-b023-57fcfc6d33ff_llnld4.webp'
    },
    {
        id: 19,
        name: 'Manchester United away kit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862513/Jersey-sweden/ManUnited/07-08Away-removebg-preview_gn9igg.webp'
    },

    {
        id: 20,
        name: 'Chelsea away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862554/Jersey-sweden/Chelsea/unnamed_pyfnkz.png'
    },
    {
        id: 21,
        name: 'Chelsea away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862553/Jersey-sweden/Chelsea/ucG5n--medium_zdkw3w.webp'
    },
    {
        id: 22,
        name: 'Chelsea away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862551/Jersey-sweden/Chelsea/1712543446533128419_qd2gyh.png'
    },
    {
        id: 23,
        name: 'Chelsea home kit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862551/Jersey-sweden/Chelsea/1712543446533128419_qd2gyh.png'
    }
]


// Serie A league kits
const SeriaAKits = [
    {
        id: 1,
        name: 'AC Milan away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862464/Jersey-sweden/ACmilan/41604654036ab532bf6_adavpq.png'
    },
    {
        id: 2,
        name: 'AC Milan home kit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862464/Jersey-sweden/ACmilan/image_7193918c-e12e-417e-a886-_uchwon.webp'
    },
    {
        id: 3,
        name: 'AC Milan home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862463/Jersey-sweden/ACmilan/41605602355a263e428_qj8sbk.png'
    },
    {
        id: 4,
        name: 'AC Milan home kit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862462/Jersey-sweden/ACmilan/acmilan1-removebg-preview_x8srey.webp'
    },
    {
        id: 5,
        name: 'AC Milan fantasy kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862462/Jersey-sweden/ACmilan/ac-milan1-removebg_euojja.webp'
    },
    {
        id: 6,
        name: 'Inter Milan home Kit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862559/Jersey-sweden/InterMilan/inter200809-removebg-_eygp5g.webp'
    },
    {
        id: 7,
        name: 'Inter Milan away Kit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862558/Jersey-sweden/InterMilan/image_0d7b78da-d12a-4591-8682-87549f4fe879_rfn7gs.webp'
    },
    {
        id: 8,
        name: 'Inter Milan away kit fantasy',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862555/Jersey-sweden/InterMilan/1630030965293351796_uaejo2.png'
    },
    {
        id: 9,
        name: 'Juventus home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862585/Jersey-sweden/Juventus/0187641_juventus-2324-home-jersey_500_e0dj0u.png'
    },
    {
        id: 10,
        name: 'Juventus away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862589/Jersey-sweden/Juventus/ViZy1wcmV2aWV3ICgxKS52MS5wbmc_--medium_nnno2f.webp'
    },
    {
        id: 11,
        name: 'Juventus home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862587/Jersey-sweden/Juventus/HR8246_1_APPAREL_Photography_FrontView_transparent_lpuwi4.webp'
    },
    {
        id: 12,
        name: 'Juventus home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862587/Jersey-sweden/Juventus/4157475959057678039_bijyl0.png'
    },

    {
        id: 13,
        name: 'Napoli home kit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862517/Jersey-sweden/Napoli/napoli-01-removebg-preview_1_cjbnoe.webp'
    }, 
    {
        id: 14,
        name: 'Napoli away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862519/Jersey-sweden/Napoli/sscn-1-removebg-_wi4mce.webp'
    }
]


// Other ligues kits 
const otherLeaguesKits = [
    {
        id: 1,
        name: 'Bayern munich homekit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862531/Jersey-sweden/Other/IB1480_1_APPAREL_Photography_FrontView_transparent_koebe4.webp'
    },
    {
        id: 2,
        name: 'Bayern munich homekit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862523/Jersey-sweden/Other/01613702759de5e24cd_e3hneb.png'
    },

    {
        id: 3,
        name: 'Dortdmund home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862522/Jersey-sweden/Other/01600744029fdd7ccde_ey3yyt.png'
    },
    {
        id: 4,
        name: 'Dortmund away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862526/Jersey-sweden/Other/016052583029f67d4db_kl9auw.png'
    },
    {
        id: 5,
        name: 'Dortmund classic homekit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862529/Jersey-sweden/Other/dort-1-removebg-preview_yd4vnu.webp'
    },

    {
        id: 6,
        name: 'Ajax away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862536/Jersey-sweden/Other/1654757952327916158_fuwrfn.png'
    },
    {
        id: 7,
        name: 'Ajax home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862524/Jersey-sweden/Other/01666684660627f5c27_shwdqk.png'
    },
    {
        id: 8,
        name: 'Ajax away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862525/Jersey-sweden/Other/1630288355007571699_nrwnqu.png'
    },
    {
        id: 9,
        name: 'Ajax classic home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862527/Jersey-sweden/Other/ajax-01-removebg_w5ncqa.webp'
    },

    {
        id: 10,
        name: 'Bayern Leverkusen fantasy kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862537/Jersey-sweden/Other/1715669255273924609_hbuqqq.png'
    },
    {
        id: 11,
        name: 'Marsillie home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862497/Jersey-sweden/Ligue1/visuels_flocage_pastilles_2023_domicile_replica_homme_xsbqsk.png'
    }, 
    {
        id: 12,
        name: 'Marsillie away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862493/Jersey-sweden/Ligue1/ext_rieur_replica_homme_ityrwk.png'
    },

    {
        id: 13,
        name: 'PSG home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862494/Jersey-sweden/Ligue1/file_zn3wnt.png'
    },
    {
        id: 14,
        name: 'Psg away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862496/Jersey-sweden/Ligue1/psg1-removebg_yzkdvz.webp'
    },
    {
        id: 15,
        name: 'Psg jordan kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862492/Jersey-sweden/Ligue1/DR3969-011-PHSFH001_nruoli.webp'
    },
    {
        id: 16,
        name: 'Psg classic home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862488/Jersey-sweden/Ligue1/0102_PSG_home-removebg_z2f6ys.webp'
    }
]

// International kits

const InternationalKits = [
    {
        id: 1,
        name: 'Argentina home kit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862574/Jersey-sweden/International/f459fb32-removebg-preview_nggyir.webp'
    },
    {
        id: 2,
        name: 'Argentina home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862571/Jersey-sweden/International/Argentina_qtcwel.webp'
    },
    {
        id: 3,
        name: 'Argentina classic home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862567/Jersey-sweden/International/3e7ed23f-removebg-preview_wmhbua.webp'
    },
    {
        id: 4,
        name: 'Belgium home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862583/Jersey-sweden/International/Untitled_design__10_-removebg_wrnbhx.webp'
    },
    {
        id: 5,
        name: 'Belgium away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862580/Jersey-sweden/International/HE6637_1_APPAREL_Photography_FrontView_transparent_500x_ocm2qq.webp'
    },
    {
        id: 6,
        name: 'Brazil home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862573/Jersey-sweden/International/brasil2006-removebg-preview_r1jgo2.webp'
    },
    {
        id: 7,
        name: 'Brazil home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862572/Jersey-sweden/International/br2-removebg-preview_pynfef.webp'
    },
    {
        id: 8,
        name: 'Brazil away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862560/Jersey-sweden/International/02af2a65cb870628-removebg-preview_n8zwtu.webp'
    },
    {
        id: 9,
        name: 'Brazil away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862560/Jersey-sweden/International/00dfb33f-removebg-preview_sbtptf.webp'
    },
    {
        id: 10,
        name: 'England home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862563/Jersey-sweden/International/1712133861492357348_r3ylnr.png'
    },
    {
        id: 11,
        name: 'England away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862562/Jersey-sweden/International/1713507358773145493_qxcdgl.png'
    },
    {
        id: 12,
        name: 'Germany home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862578/Jersey-sweden/International/ger-1-removebg-preview_h7r3er.webp'
    },
    {
        id: 13,
        name: 'Germany away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862579/Jersey-sweden/International/ger1-removebg-preview_mwsmjf.webp'
    },
    {
        id: 14,
        name: 'Germany home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862575/Jersey-sweden/International/file_xcmj7n.png'
    },
    {
        id: 15,
        name: 'France away kit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862581/Jersey-sweden/International/image_750x_3cd74a1c-f190-4912-b344-7b6a01834ad0-_1_-removebg-preview_h3zv3o.webp'
    },
    {
        id: 16,
        name: 'France home kit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862577/Jersey-sweden/International/france_q8ocwt.webp'
    },
    {
        id: 17,
        name: 'France away kit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862576/Jersey-sweden/International/france-1998-away-kit-574363_shhwb7.webp'
    },
    {
        id: 18,
        name: 'France home kit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862569/Jersey-sweden/International/8aa675ad-scaled-removebg-preview_q0caeb.webp'
    },
    {
        id: 19,
        name: 'Japan fantasy kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862568/Jersey-sweden/International/6d99752aad4473ca-removebg-preview_nxg6ek.webp'
    },
    {
        id: 20,
        name: 'Portugal home kit classic',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862570/Jersey-sweden/International/a94de429-removebg-preview_ffwtkp.webp'
    },
    {
        id: 21,
        name: 'Portugal home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862565/Jersey-sweden/International/1713513425816425596_a8cebb.png'
    },
    {
        id: 22,
        name: 'Portugal away kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862566/Jersey-sweden/International/3171576808334af4f34_ziqjm6.png'
    },
    {
        id: 23,
        name: 'Spain home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862582/Jersey-sweden/International/spain_1-removebg-preview_uyocch.webp'
    },
    {
        id: 24,
        name: 'Uruguay home kit',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862584/Jersey-sweden/International/uraguay_dtnjup.webp'
    }

]

// Component for la lagia kits
function Laliga() {

    return (
        <div>
            <ul className='flex items-center gap-10 px-10'>
                {LaligaKits.map((data, index) => (
                    <li key={index}>
                        <img src={data.image} alt='Laliga teams kits'/>
                        {data.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Component for Primier League
function PrimierLeague() {
    
    return (
        <div>
            <ul>
                {PrimierLeagueKits.map((data, index) => (
                    <li key={index}>
                        <img src={data.image} alt='
                        Premier League teams kits'/>
                        {data.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Component for Serie A 
function SerieA() {

    return (
        <div>
            <ul>
                {SeriaAKits.map((data, index) => ( 
                    <li key={index}>
                        <img src={data.image} alt='
                        Seria A teams kits'/>
                        {data.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

//Component for other Leagues kits

function OtherLeagues() {
    
    return (
        <div>
            <ul>
                {otherLeaguesKits.map((data, index) => (
                    <li key={index}>
                        <img src={data.image} alt='Other leagues kits'/>
                        {data.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Components National teams kits
function NationalTeams() {

    return (
        <div>
            <ul>
                {InternationalKits.map((data, index) => (
                    <li key={index}>
                        <img src={data.image} alt='National teams kits'/>
                        {data.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export { Laliga, PrimierLeague, SerieA, OtherLeagues, NationalTeams}

