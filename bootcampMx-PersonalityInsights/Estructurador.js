function Estructurador(data){
    x = data;

    var apertura = x.personality[0].name;
    var aperturaP= x.personality[0].percentile;
    
    var audacia = x.personality[0].children[0].name;
    var audaciaP = x.personality[0].children[0].percentile;

    var inAr = x.personality[0].children[1].name;
    var inArP = x.personality[0].children[1].percentile;

    var emocional = x.personality[1].children[2].name;
    var emocionalP = x.personality[1].children[2].percentile;

    var imagin = x.personality[0].children[3].name;
    var imaginP = x.personality[0].children[3].percentile;

    var intelec = x.personality[0].children[4].name;
    var intelecP = x.personality[0].children[4].percentile;

    var desafAut = x.personality[0].children[5].name;
    var desafAutP = x.personality[0].children[5].percentile;

    var res = x.personality[1].name;
    var resP = x.personality[1].percentile;

    var necex = x.personality[1].children[0].name;
    var necexP = x.personality[1].children[0].percentile;

    var caut = x.personality[1].children[1].name;
    var cautP = x.personality[1].children[1].percentile;

    var ob = x.personality[1].children[2].name;
    var obP = x.personality[1].children[2].percentile;

    var dis = x.personality[1].children[3].name;
    var disP = x.personality[1].children[3].percentile;

    var autodis = x.personality[1].children[4].name;
    var autodisP = x.personality[1].children[4].percentile;

    var autoEf = x.personality[1].children[5].name;
    var autoEfP = x.personality[1].children[5].percentile;

    var extro = x.personality[2].name;
    var extroP = x.personality[2].percentile;

    var act = x.personality[2].children[0].name;
    var actP = x.personality[2].children[0].percentile;

    var seg = x.personality[2].children[1].name;
    var segP = x.personality[2].children[1].percentile;

    var aleg = x.personality[2].children[2].name;
    var alegP = x.personality[2].children[2].percentile;

    var busqem = x.personality[2].children[3].name;
    var busqemP = x.personality[2].children[3].percentile;

    var sim = x.personality[2].children[4].name;
    var simP = x.personality[2].children[4].percentile;

    var sociab = x.personality[2].children[5].name;
    var sociabP = x.personality[2].children[5].percentile;

    var amab = x.personality[3].name;
    var amabP = x.personality[3].percentile;

    var altru = x.personality[3].children[0].name;
    var altruP = x.personality[3].children[0].percentile;

    var coo = x.personality[3].children[1].name;
    var cooP = x.personality[3].children[1].percentile;

    var modes = x.personality[3].children[2].name;
    var modesP = x.personality[3].children[2].percentile;

    var intransi = x.personality[3].children[3].name;
    var intransiP = x.personality[3].children[3].percentile;

    var compas = x.personality[3].children[4].name;
    var compasP = x.personality[3].children[4].percentile;

    var confianzab = x.personality[3].children[5].name;
    var confianzaP = x.personality[3].children[5].percentile;

    var rango = x.personality[4].name;
    var rangoP = x.personality[4].percentile;

    var vehem = x.personality[4].children[0].name;
    var vehemP = x.personality[4].children[0].percentile;

    var preoc = x.personality[4].children[1].name;
    var preocP = x.personality[4].children[1].percentile;

    var mel = x.personality[4].children[2].name;
    var melP = x.personality[4].children[2].percentile;

    var desm = x.personality[4].children[3].name;
    var desmP = x.personality[4].children[3].percentile;

    var tim = x.personality[4].children[4].name;
    var timP = x.personality[4].children[4].percentile;

    var susTen = x.personality[4].children[5].name;
    var susTenP = x.personality[4].children[5].percentile;

    var rango = x.personality[4].name;
    var rangoP = x.personality[4].percentile;

    var vehem = x.personality[4].children[0].name;
    var vehemP = x.personality[4].children[0].percentile;

    var preoc = x.personality[4].children[1].name;
    var preocP = x.personality[4].children[1].percentile;

    var mel = x.personality[4].children[2].name;
    var melP = x.personality[4].children[2].percentile;

    var desm = x.personality[4].children[3].name;
    var desmP = x.personality[4].children[3].percentile;

    var tim = x.personality[4].children[4].name;
    var timP = x.personality[4].children[4].percentile;

    var susTen = x.personality[4].children[5].name;
    var susTenP = x.personality[4].children[5].percentile;

    var desafio = x.needs[0].name;
    var desafioP = x.needs[0].percentile;

    var famil = x.needs[1].name;
    var familP = x.needs[1].percentile;

    var curios = x.needs[2].name;
    var curiosP = x.needs[2].percentile;

    var entus = x.needs[3].name;
    var entusP = x.needs[3].percentile;

    var armon = x.needs[4].name;
    var armonP = x.needs[4].percentile;

    var ideal = x.needs[5].name;
    var idealP = x.needs[5].percentile;

    var libertad = x.needs[6].name;
    var libertadP = x.needs[6].percentile;

    var amor = x.needs[7].name;
    var amorP = x.needs[7].percentile;

    var practicidad = x.needs[8].name;
    var practicidadP = x.needs[8].percentile;

    var autoex = x.needs[9].name;
    var autoexP = x.needs[9].percentile;

    var estab = x.needs[10].name;
    var estabP = x.needs[10].percentile;

    var estruct = x.needs[11].name;
    var estructP = x.needs[11].percentile;

    var conserv = x.values[0].name;
    var conservP = x.values[0].percentile;

    var aperCam = x.values[1].name;
    var aperCamP = x.values[1].percentile;

    var hedo = x.values[2].name;
    var hedoP = x.values[2].percentile;

    var superac = x.values[3].name;
    var superacP = x.values[3].percentile;

    var autotrac = x.values[4].name;
    var autotracP = x.values[4].percentile;

    var auto = x.consumption_preferences[0].consumption_preferences[0].name;
    var autoS = x.consumption_preferences[0].consumption_preferences[0].score;

    var autos = x.consumption_preferences[0].consumption_preferences[1].name;
    var autosS = x.consumption_preferences[0].consumption_preferences[1].score;

    var ropac = x.consumption_preferences[0].consumption_preferences[2].name;
    var ropacS = x.consumption_preferences[0].consumption_preferences[2].score;

    var ropas = x.consumption_preferences[0].consumption_preferences[3].name;
    var ropasS = x.consumption_preferences[0].consumption_preferences[3].score;

    var ropacom = x.consumption_preferences[0].consumption_preferences[4].name;
    var ropacomS = x.consumption_preferences[0].consumption_preferences[4].score;

    var nombreMarc = x.consumption_preferences[0].consumption_preferences[5].name;
    var nombreMarcS = x.consumption_preferences[0].consumption_preferences[5].score;

    var utilidad = x.consumption_preferences[0].consumption_preferences[6].name;
    var utilidadS = x.consumption_preferences[0].consumption_preferences[6].score;

    var publLinea = x.consumption_preferences[0].consumption_preferences[7].name;
    var publLineaS = x.consumption_preferences[0].consumption_preferences[7].score;

    var redeSoc = x.consumption_preferences[0].consumption_preferences[8].name;
    var redeSocS = x.consumption_preferences[0].consumption_preferences[8].score;

    var fam = x.consumption_preferences[0].consumption_preferences[8].name;
    var famS = x.consumption_preferences[0].consumption_preferences[8].score;

    var cap = x.consumption_preferences[0].consumption_preferences[9].name;
    var capS = x.consumption_preferences[0].consumption_preferences[9].score;

    var tarjCred = x.consumption_preferences[0].consumption_preferences[10].name;
    var tarjCredS = x.consumption_preferences[0].consumption_preferences[10].score;

    var tarjCred = x.consumption_preferences[0].consumption_preferences[10].name;
    var tarjCredS = x.consumption_preferences[0].consumption_preferences[10].score;

    var comerFuera = x.consumption_preferences[1].consumption_preferences[0].name;
    var comerFueraS = x.consumption_preferences[1].consumption_preferences[0].score;

    var membresiaGym = x.consumption_preferences[1].consumption_preferences[1].name;
    var membresiaGymS = x.consumption_preferences[1].consumption_preferences[1].score;

    var actividadesAireLibre = x.consumption_preferences[1].consumption_preferences[2].name;
    var actividadesAireLibreS = x.consumption_preferences[1].consumption_preferences[2].score;

    var preferenciasAmb = x.consumption_preferences[2].consumption_preferences[0].name;
    var preferenciasAmbS = x.consumption_preferences[2].consumption_preferences[0].score;

    var empren = x.consumption_preferences[3].consumption_preferences[0].name;
    var emprenS = x.consumption_preferences[3].consumption_preferences[0].score;

    var cineRom = x.consumption_preferences[4].consumption_preferences[0].name;
    var cineRomS = x.consumption_preferences[4].consumption_preferences[0].score;

    var cineAven = x.consumption_preferences[4].consumption_preferences[1].name;
    var cineAvenS = x.consumption_preferences[4].consumption_preferences[1].score;
    
    var cineTerror = x.consumption_preferences[4].consumption_preferences[2].name;
    var cineTerrorS = x.consumption_preferences[4].consumption_preferences[2].score;

    var cineMusical = x.consumption_preferences[4].consumption_preferences[3].name;
    var cineMusicalS = x.consumption_preferences[4].consumption_preferences[3].score;

    var cineHistor = x.consumption_preferences[4].consumption_preferences[4].name;
    var cineHistorS = x.consumption_preferences[4].consumption_preferences[4].score;

    var cineFicc = x.consumption_preferences[4].consumption_preferences[5].name;
    var cineFiccS = x.consumption_preferences[4].consumption_preferences[5].score;

    var cineBel = x.consumption_preferences[4].consumption_preferences[6].name;
    var cineBelS = x.consumption_preferences[4].consumption_preferences[6].score;

    var cineDrama = x.consumption_preferences[4].consumption_preferences[5].name;
    var cineDramaS = x.consumption_preferences[4].consumption_preferences[5].score;

    var cineAccion = x.consumption_preferences[4].consumption_preferences[5].name;
    var cineAccionS = x.consumption_preferences[4].consumption_preferences[5].score;

    var cineDoc = x.consumption_preferences[4].consumption_preferences[5].name;
    var cineDocS = x.consumption_preferences[4].consumption_preferences[5].score;

    var rap = x.consumption_preferences[5].consumption_preferences[0].name;
    var rapS = x.consumption_preferences[5].consumption_preferences[0].score;

    var country = x.consumption_preferences[5].consumption_preferences[1].name;
    var countryS = x.consumption_preferences[5].consumption_preferences[1].score;

    var rb = x.consumption_preferences[5].consumption_preferences[2].name;
    var rbS = x.consumption_preferences[5].consumption_preferences[2].score;

    var concierto = x.consumption_preferences[5].consumption_preferences[3].name;
    var conciertoS = x.consumption_preferences[5].consumption_preferences[3].score;

    var musico = x.consumption_preferences[5].consumption_preferences[4].name;
    var musicoS = x.consumption_preferences[5].consumption_preferences[4].score;

    var latina = x.consumption_preferences[5].consumption_preferences[5].name;
    var latinaS = x.consumption_preferences[5].consumption_preferences[5].score;

    var rock = x.consumption_preferences[5].consumption_preferences[6].name;
    var rockS = x.consumption_preferences[5].consumption_preferences[6].score;
    
    var clasica = x.consumption_preferences[5].consumption_preferences[7].name;
    var clasicaS = x.consumption_preferences[5].consumption_preferences[7].score;
    
    var frecLec = x.consumption_preferences[6].consumption_preferences[0].name;
    var frecLecS = x.consumption_preferences[6].consumption_preferences[0].score;

    var revEntr = x.consumption_preferences[6].consumption_preferences[1].name;
    var revEntrS = x.consumption_preferences[6].consumption_preferences[1].score;
    
    var librosNoFicc = x.consumption_preferences[6].consumption_preferences[2].name;
    var librosNoFiccS = x.consumption_preferences[6].consumption_preferences[2].score;
    
    var librosInvFinanciera = x.consumption_preferences[6].consumption_preferences[3].name;
    var librosInvFinancieraS = x.consumption_preferences[6].consumption_preferences[3].score;
    
    var librosAutoBio = x.consumption_preferences[6].consumption_preferences[4].name;
    var librosAutoBioS = x.consumption_preferences[6].consumption_preferences[4].score;
    
    var volun = x.consumption_preferences[7].consumption_preferences[0].name;
    var volunS = x.consumption_preferences[7].consumption_preferences[0].score;

    var y = {
        [apertura]: {N: String(aperturaP)},
        [audacia]: {N: String(audaciaP)},
        [inAr]: {N: String(inArP)},
        [emocional]: {N: String(emocionalP)},
        [imagin]: {N: String(imaginP)},
        [intelec]: {N: String(intelecP)},
        [desafAut]: {N: String(desafAutP)},
        [res]: {N: String(resP)},
        [necex]: {N: String(necexP)},
        [caut]: {N: String(cautP)},
        [ob]: {N: String(obP)},
        [dis]: {N: String(disP)},
        [autodis]: {N: String(autodisP)},
        [autoEf]: {N: String(autoEfP)},
        [extro]: {N: String(extroP)},
        [act]: {N: String(actP)},
        [seg]: {N: String(segP)},
        [aleg]: {N: String(alegP)},
        [busqem]: {N: String(busqemP)},
        [sim]: {N: String(simP)},
        [sociab]: {N: String(sociabP)},
        [amab]: {N: String(amabP)},
        [altru]: {N: String(altruP)},
        [coo]: {N: String(cooP)},
        [modes]: {N: String(modesP)},
        [intransi]: {N: String(intransiP)},
        [compas]: {N: String(compasP)},
        [confianzab]: {N: String(confianzaP)},
        [rango]: {N: String(rangoP)},
        [vehem]: {N: String(vehemP)},
        [preoc]: {N: String(preocP)},
        [mel]: {N: String(melP)},
        [desm]: {N: String(desmP)},
        [tim]: {N: String(timP)},
        [susTen]: {N: String(susTenP)},
        [rango]: {N: String(rangoP)},
        [vehem]: {N: String(vehemP)},
        [preoc]: {N: String(preocP)},
        [mel]: {N: String(melP)},
        [desm]: {N: String(desmP)},
        [tim]: {N: String(timP)},
        [susTen]: {N: String(susTenP)},
        [desafio]: {N: String(desafioP)},
        [famil]: {N: String(familP)},
        [curios]: {N: String(curiosP)},
        [entus]: {N: String(entusP)},
        [armon]: {N: String(armonP)},
        [ideal]: {N: String(idealP)},
        [libertad]: {N: String(libertadP)},
        [amor]: {N: String(amorP)},
        [practicidad]: {N: String(practicidadP)},
        [autoex]: {N: String(autoexP)},
        [estab]: {N: String(estabP)},
        [estruct]: {N: String(estructP)},
        [conserv]: {N: String(conservP)},
        [aperCam]: {N: String(aperCamP)},
        [hedo]: {N: String(hedoP)},
        [superac]: {N: String(superacP)},
        [autotrac]: {N: String(autotracP)},
        [auto]: {N: String(autoS)},
        [autos]: {N: String(autosS)},
        [ropac]: {N: String(ropacS)},
        [ropas]: {N: String(ropasS)},
        [ropacom]: {N: String(ropacomS)},
        [nombreMarc]: {N: String(nombreMarcS)},
        [utilidad]: {N: String(utilidadS)},
        [publLinea]: {N: String(publLineaS)},
        [redeSoc]: {N: String(redeSocS)},
        [fam]: {N: String(famS)},
        [cap]: {N: String(capS)},
        [tarjCred]: {N: String(tarjCredS)},
        [comerFuera]: {N: String(comerFueraS)},
        [membresiaGym]: {N: String(membresiaGymS)},
        [actividadesAireLibre]: {N: String(actividadesAireLibreS)},
        [preferenciasAmb]: {N: String(preferenciasAmbS)},
        [empren]: {N: String(emprenS)},
        [cineRom]: {N: String(cineRomS)},
        [cineAven]: {N: String(cineAvenS)},
        [cineTerror]: {N: String(cineTerrorS)},
        [cineMusical]: {N: String(cineMusicalS)},
        [cineHistor]: {N: String(cineHistorS)},
        [cineFicc]: {N: String(cineFiccS)},
        [cineBel]: {N: String(cineBelS)},
        [cineDrama]: {N: String(cineDramaS)},
        [cineAccion]: {N: String(cineAccionS)},
        [cineDoc]: {N: String(cineDocS)},
        [rap]: {N: String(rapS)},
        [country]: {N: String(countryS)},
        [rb]: {N: String(rbS)},
        [concierto]: {N: String(conciertoS)},
        [musico]: {N: String(musicoS)},
        [latina]: {N: String(latinaS)},
        [rock]: {N: String(rockS)},
        [clasica]: {N: String(clasicaS)},
        [frecLec]: {N: String(frecLecS)},
        [revEntr]: {N: String(revEntrS)},
        [librosNoFicc]: {N: String(librosNoFiccS)},
        [librosInvFinanciera]: {N: String(librosInvFinancieraS)},
        [librosAutoBio]: {N: String(librosAutoBioS)},
        [volun]: {N: String(volunS)}
    };
    return y
}

module.exports = {
    cleansing: Estructurador
};