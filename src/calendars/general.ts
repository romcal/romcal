import dayjs from "dayjs";

import { Dates, Locales, Seasons } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import Config, { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig = {
    ascensionOnSunday: false,
    christmastideEnds: "o",
    christmastideIncludesTheSeasonOfEpiphany: true,
    corpusChristiOnThursday: false,
    epiphanyOnJan6: false,
};

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
    const year = config.year;
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintsBasilTheGreatAndGregoryNazianzenBishopsAndDoctors",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-1-2`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "theMostHolyNameOfJesus",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-3`),
        },
        {
            key: "saintRaymondOfPenyafortPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-7`),
        },
        {
            key: "saintHilaryOfPoitiersBishopAndDoctor",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-13`),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintAnthonyOfEgyptAbbot",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-1-17`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsFabianPopeAndSebastianMartyrs",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-20`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintAgnesVirginAndMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-1-21`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintVincentDeaconAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-22`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintFrancisDeSalesBishopAndDoctor",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-1-24`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        // http://www.vatican.va/content/francesco/en/motu_proprio/documents/papa-francesco-motu-proprio-20190930_aperuit-illis.html
        {
            key: "sundayOfTheWordOfGod",
            type: Types.SUNDAY,
            date: await (async (y: number): Promise<dayjs.Dayjs> => {
                const sundays = await Seasons.earlyOrdinaryTime(year, config.christmastideEnds, config.epiphanyOnJan6);
                const thirdSundayOfOrdinaryTime = sundays.find(sunday => sunday.key === "thirdSundayOfOrdinaryTime");
                return thirdSundayOfOrdinaryTime!.date;
            })(year),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.GREEN,
                },
            },
        },
        // The proper color for the Chair of Peter (Feast, Feb 22) and the Conversion of
        //cSt. Paul (Feast, Jan 25) is white, although both St. Peter and St. Paul
        // were martyrs.
        {
            key: "conversionOfSaintPaulApostle",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-1-25`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsTimothyAndTitusBishops",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-1-26`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAngelaMericiVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-27`),
        },
        {
            key: "saintThomasAquinasPriestAndDoctor",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-1-28`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintJohnBoscoPriest",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-1-31`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintBlaseBishopAndMartyrSaintAnsgarBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-2-3`),
        },
        {
            key: "saintAgathaVirginAndMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-2-5`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintPaulMikiAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-2-6`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintJeromeEmilianiSaintJosephineBakhitaVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-2-8`),
        },
        {
            key: "saintScholasticaVirgin",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-2-10`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfLourdes",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-2-11`),
        },
        {
            key: "saintsCyrilMonkAndMethodiusBishop",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-2-14`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "sevenHolyFoundersOfTheServiteOrder",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-2-17`),
        },
        {
            key: "saintPeterDamianBishopAndDoctorOfTheChurch",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-2-21`),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "chairOfSaintPeterApostle",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-2-22`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPolycarpBishopAndMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-2-23`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintCasimir",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-3-4`),
        },
        {
            key: "saintsPerpetuaAndFelicityMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-3-7`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintJohnOfGodReligious",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-3-8`),
        },
        {
            key: "saintFrancesOfRomeReligious",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-3-9`),
        },
        {
            key: "saintPatrickBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-3-17`),
        },
        {
            key: "saintCyrilOfJerusalemBishopAndDoctor",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-3-18`),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintTuribiusOfMogrovejoBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-3-23`),
        },
        {
            key: "saintFrancisOfPaolaHermit",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-2`),
        },
        {
            key: "saintIsidoreOfSevilleBishopAndDoctorOfTheChurch",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-4`),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintVincentFerrerPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-5`),
        },
        {
            key: "saintJohnBaptistDeLaSallePriest",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-4-7`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintStanislausBishopAndMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-4-11`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintMartinIPopeAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-13`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintAnselmOfCanterburyBishopAndDoctorOfTheChurch",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-21`),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintGeorgeMartyrSaintAdalbertBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-23`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintFidelisOfSigmaringenPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-24`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintMarkTheEvangelist",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-4-25`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPeterChanelPriestAndMartyrSaintLouisGrignonDeMontfortPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-28`),
        },
        {
            key: "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-4-29`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintPiusVPope",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-30`),
        },
        {
            key: "saintJosephTheWorker",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-1`),
        },
        {
            key: "saintAthanasiusBishopAndDoctor",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-5-2`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintsPhilipAndJamesApostles",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-5-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsNereusAndAchilleusMartyrsSaintPancrasMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-12`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "ourLadyOfFatima",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-13`),
        },
        {
            key: "saintMatthiasTheApostle",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-5-14`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJohnIPopeAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-18`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintBernardineOfSienaPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-20`),
        },
        {
            key: "saintChristopherMagallanesAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-21`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintRitaOfCascia",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-22`),
        },
        {
            key: "saintBedeTheVenerablePriestAndDoctorSaintGregoryViiPopeSaintMaryMagdaleneDePazziVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-25`),
        },
        {
            key: "saintPhilipNeriPriest",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-5-26`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAugustineOfCanterburyBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-27`),
        },
        {
            key: "visitationOfTheBlessedVirginMary",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-5-31`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJustinMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-6-1`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintsMarcellinusAndPeterMartyrs",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-2`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintsCharlesLwangaAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-6-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintBonifaceBishopAndMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-6-5`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintNorbertBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-6`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintEphremDeaconAndDoctor",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-9`),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintBarnabasTheApostle",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-6-11`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAnthonyOfPaduaPriestAndDoctor",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-6-13`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintRomualdAbbot",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-19`),
        },
        {
            key: "saintAloysiusGonzagaReligious",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-6-21`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPaulinusOfNolaBishopSaintsJohnFisherBishopAndThomasMoreMartyrs",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-22`),
        },
        {
            key: "saintCyrilOfAlexandriaBishopAndDoctor",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-27`),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintIrenaeusBishopAndMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-6-28`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "firstMartyrsOfTheChurchOfRome",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-30`),
        },
        {
            key: "saintThomasTheApostle",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-7-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintElizabethOfPortugal",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-4`),
        },
        {
            key: "saintAnthonyZaccariaPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-5`),
        },
        {
            key: "saintMariaGorettiVirginAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-6`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintsAugustineZhaoRongPriestAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-9`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintBenedictOfNursiaAbbot",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-11`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintHenryBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-13`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintCamillusDeLellisPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-14`),
        },
        {
            key: "saintBonaventureBishopAndDoctor",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-15`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "ourLadyOfMountCarmel",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-16`),
        },
        {
            key: "saintApollinaris",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-20`),
        },
        {
            key: "saintLawrenceOfBrindisiPriestAndDoctor",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-21`),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        // https://github.com/pejulian/romcal/issues/27
        {
            key: "saintMaryMagdalene",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-7-22`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        // On 11 Feb 2018, Pope Francis inserted the Memorial of the
        // Blessed Virgin Mary, Mother of the Church, into the General Roman Calendar.
        // It will be celebrated on Monday after Pentecost.
        {
            key: "maryMotherOfTheChurch",
            type: Types.MEMORIAL, // Memorial
            date: ((y: number): dayjs.Dayjs => Dates.pentecostSunday(y).add(1, "day"))(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintBridgetOfSwedenReligious",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-7-23`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintCharbelMakhloufPriestAndHermit",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-24`),
        },
        {
            key: "saintJamesApostle",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-7-25`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsJoachimAndAnne",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-26`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintMartha",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-29`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPeterChrysologusBishopAndDoctor",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-30`),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintIgnatiusOfLoyolaPriest",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-31`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAlphonsusMariaDeLiguoriBishopAndDoctorOfTheChurch",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-8-1`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintEusebiusOfVercelliBishopSaintPeterJulianEymardPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-2`),
        },
        {
            key: "saintJeanVianneyTheCureOfArsPriest",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-8-4`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "dedicationOfTheBasilicaOfSaintMaryMajor",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-5`),
        },
        {
            key: "saintSixtusIiPopeAndCompanionsMartyrsSaintCajetanPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-7`),
        },
        {
            key: "saintDominicPriest",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-8-8`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-9`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintLawrenceOfRomeDeaconAndMartyr",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-8-10`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintClareVirgin",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-8-11`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJaneFrancesDeChantalReligious",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-12`),
        },
        {
            key: "saintsPontianPopeAndHippolytusPriestMartyrs",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-13`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintMaximilianMaryKolbePriestAndMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-8-14`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintStephenOfHungary",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-16`),
        },
        {
            key: "saintJohnEudesPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-19`),
        },
        {
            key: "saintBernardOfClairvauxAbbotAndDoctorOfTheChurch",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-8-20`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintPiusXPope",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-8-21`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "queenshipOfBlessedVirginMary",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-8-22`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintRoseOfLima",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-23`),
        },
        {
            key: "saintBartholomewTheApostle",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-8-24`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintLouisSaintJosephOfCalasanzPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-25`),
        },
        {
            key: "saintMonica",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-8-27`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAugustineOfHippoBishopAndDoctorOfTheChurch",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-8-28`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "theBeheadingOfSaintJohnTheBaptistMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-8-29`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintGregoryTheGreatPopeAndDoctor",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "birthOfTheBlessedVirginMary",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-9-8`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPeterClaverPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-9`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "holyNameOfTheBlessedVirginMary",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-12`),
        },
        {
            key: "saintJohnChrysostomBishopAndDoctor",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-13`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "theExaltationOfTheHolyCross",
            source: "celebrations", // Override the default lookup source
            type: Types.FEAST,
            date: dayjs.utc(`${year}-9-14`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                },
            },
        },
        {
            key: "ourLadyOfSorrows",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-15`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsCorneliusPopeAndCyprianBishopMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-16`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintRobertBellarmineBishopAndDoctor",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-17`),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintJanuariusBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-19`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintAndrewKimTaegonPriestAndPaulChongHasangAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-20`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintMatthewApostleAndEvangelist",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-9-21`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPioOfPietrelcinaPadrePioPriest",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-23`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsCosmasAndDamianMartyrs",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-26`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintVincentDePaulPriest",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-27`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintWenceslausMartyrSaintsLawrenceRuizAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-28`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintsMichaelGabrielAndRaphaelArchangels",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-9-29`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJeromePriestAndDoctor",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-30`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintThereseOfTheChildJesusVirginAndDoctor",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-10-1`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "guardianAngels",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-10-2`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFrancisOfAssisi",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-10-4`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintBrunoPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-6`),
        },
        {
            key: "ourLadyOfTheRosary",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-10-7`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintDenisAndCompanionsMartyrsSaintJohnLeonardiPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-9`),
        },
        // http://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20140529_decreto-calendario-generale-gxxiii-gpii_en.html
        {
            key: "popeSaintJohnXXIII",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-11`),
        },
        // http://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20140529_decreto-calendario-generale-gxxiii-gpii_en.html
        {
            key: "popeSaintJohnPaulII",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-22`),
        },
        {
            key: "saintCallistusIPopeAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-14`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintTeresaOfJesusVirginAndDoctorOfTheChurch",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-10-15`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintHedwigReligiousSaintMargaretMaryAlacoqueVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-16`),
        },
        {
            key: "saintIgnatiusOfAntiochBishopAndMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-10-17`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintLukeTheEvangelist",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-10-18`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsJeanDeBrebeufAndIsaacJoguesPriestsAndCompanionsMartyrsSaintPaulOfTheCrossPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-19`),
        },
        {
            key: "saintJohnOfCapistranoPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-23`),
        },
        {
            key: "saintAnthonyMaryClaretBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-24`),
        },
        {
            key: "saintsSimonAndJudeApostles",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-10-28`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "allSouls",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-11-2`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintMartinDePorresReligious",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-3`),
        },
        {
            key: "saintCharlesBorromeoBishop",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-4`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        // Replaces 32nd Sunday in Ordinary Time when it falls on a Sunday
        {
            key: "dedicationOfTheLateranBasilica",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-11-9`),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintLeoTheGreatPopeAndDoctor",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-10`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintMartinOfToursBishop",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-11`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJosaphatBishopAndMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-12`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintAlbertTheGreatBishopAndDoctor",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-15`),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintMargaretOfScotlandSaintGertrudeTheGreatVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-16`),
        },
        {
            key: "saintElizabethOfHungary",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-17`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "dedicationOfTheBasilicasOfSaintsPeterAndPaulApostles",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-18`),
        },
        {
            key: "presentationOfTheBlessedVirginMary",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-21`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintCeciliaVirginAndMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-22`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintClementIPopeAndMartyrSaintColumbanReligious",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-23`),
        },
        {
            key: "saintAndrewDungLacAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-24`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintCatherineOfAlexandriaVirginAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-25`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintAndrewTheApostle",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-11-30`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFrancisXavierPriest",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-12-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJohnDamascenePriestAndDoctor",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-12-4`),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintNicholasBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-12-6`),
        },
        {
            key: "saintAmbroseBishopAndDoctor",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-12-7`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintJuanDiegoCuauhtlatoatzin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-12-9`),
        },
        {
            key: "ourLadyOfLoreto",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-12-10`),
        },
        {
            key: "saintDamasusIPope",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-12-11`),
        },
        {
            key: "ourLadyOfGuadalupe",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-12-12`),
        },
        {
            key: "saintLucyOfSyracuseVirginAndMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-12-13`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintJohnOfTheCrossPriestAndDoctor",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-12-14`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintPeterCanisiusPriestAndDoctor",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-12-21`),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintJohnOfKantyPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-12-23`),
        },
        {
            key: "saintStephenTheFirstMartyr",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-12-26`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintJohnTheApostleAndEvangelist",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-12-27`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "holyInnocentsMartyrs",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-12-28`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintThomasBecketBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-12-29`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintSylvesterIPope",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-12-31`),
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
