import moment from "moment";

import { Dates, Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig = {
    ascensionOnSunday: false,
    christmastideEnds: "o",
    christmastideIncludesTheSeasonOfEpiphany: true,
    corpusChristiOnThursday: false,
    epiphanyOnJan6: false,
};

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintsBasilTheGreatAndGregoryNazianzenBishopsAndDoctors",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 2 }),
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
            moment: moment.utc({ year, month: 0, day: 3 }),
        },
        {
            key: "saintRaymondOfPenyafortPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 7 }),
        },
        {
            key: "saintHilaryOfPoitiersBishopAndDoctor",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 13 }),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintAnthonyOfEgyptAbbot",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 17 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsFabianPopeAndSebastianMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 20 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintAgnesVirginAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 21 }),
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
            moment: moment.utc({ year, month: 0, day: 22 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintFrancisDeSalesBishopAndDoctor",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 24 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        // The proper color for the Chair of Peter (Feast, Feb 22) and the Conversion of
        //cSt. Paul (Feast, Jan 25) is white, although both St. Peter and St. Paul
        // were martyrs.
        {
            key: "conversionOfSaintPaulApostle",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 0, day: 25 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsTimothyAndTitusBishops",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 26 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAngelaMericiVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 27 }),
        },
        {
            key: "saintThomasAquinasPriestAndDoctor",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 28 }),
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
            moment: moment.utc({ year, month: 0, day: 31 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintBlaseBishopAndMartyrSaintAnsgarBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 3 }),
        },
        {
            key: "saintAgathaVirginAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 5 }),
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
            moment: moment.utc({ year, month: 1, day: 6 }),
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
            moment: moment.utc({ year, month: 1, day: 8 }),
        },
        {
            key: "saintScholasticaVirgin",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 10 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfLourdes",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 11 }),
        },
        {
            key: "saintsCyrilMonkAndMethodiusBishop",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 14 }),
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
            moment: moment.utc({ year, month: 1, day: 17 }),
        },
        {
            key: "saintPeterDamianBishopAndDoctorOfTheChurch",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 21 }),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "chairOfSaintPeterApostle",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 1, day: 22 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPolycarpBishopAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 23 }),
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
            moment: moment.utc({ year, month: 2, day: 4 }),
        },
        {
            key: "saintsPerpetuaAndFelicityMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 7 }),
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
            moment: moment.utc({ year, month: 2, day: 8 }),
        },
        {
            key: "saintFrancesOfRomeReligious",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 9 }),
        },
        {
            key: "saintPatrickBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 17 }),
        },
        {
            key: "saintCyrilOfJerusalemBishopAndDoctor",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 18 }),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintTuribiusOfMogrovejoBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 23 }),
        },
        {
            key: "saintFrancisOfPaolaHermit",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 2 }),
        },
        {
            key: "saintIsidoreOfSevilleBishopAndDoctorOfTheChurch",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 4 }),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintVincentFerrerPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 5 }),
        },
        {
            key: "saintJohnBaptistDeLaSallePriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 7 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintStanislausBishopAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 11 }),
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
            moment: moment.utc({ year, month: 3, day: 13 }),
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
            moment: moment.utc({ year, month: 3, day: 21 }),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintGeorgeMartyrSaintAdalbertBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 23 }),
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
            moment: moment.utc({ year, month: 3, day: 24 }),
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
            moment: moment.utc({ year, month: 3, day: 25 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPeterChanelPriestAndMartyrSaintLouisGrignonDeMontfortPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 28 }),
        },
        {
            key: "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 29 }),
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
            moment: moment.utc({ year, month: 3, day: 30 }),
        },
        {
            key: "saintJosephTheWorker",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 1 }),
        },
        {
            key: "saintAthanasiusBishopAndDoctor",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 2 }),
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
            moment: moment.utc({ year, month: 4, day: 3 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsNereusAndAchilleusMartyrsSaintPancrasMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 12 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "ourLadyOfFatima",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 13 }),
        },
        {
            key: "saintMatthiasTheApostle",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 4, day: 14 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJohnIPopeAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 18 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintBernardineOfSienaPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 20 }),
        },
        {
            key: "saintChristopherMagallanesAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 21 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintRitaOfCascia",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 22 }),
        },
        {
            key: "saintBedeTheVenerablePriestAndDoctorSaintGregoryViiPopeSaintMaryMagdaleneDePazziVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 25 }),
        },
        {
            key: "saintPhilipNeriPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 26 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAugustineOfCanterburyBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 27 }),
        },
        {
            key: "visitationOfTheBlessedVirginMary",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 4, day: 31 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJustinMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 1 }),
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
            moment: moment.utc({ year, month: 5, day: 2 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintsCharlesLwangaAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 3 }),
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
            moment: moment.utc({ year, month: 5, day: 5 }),
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
            moment: moment.utc({ year, month: 5, day: 6 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintEphremDeaconAndDoctor",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 9 }),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintBarnabasTheApostle",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 11 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAnthonyOfPaduaPriestAndDoctor",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 13 }),
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
            moment: moment.utc({ year, month: 5, day: 19 }),
        },
        {
            key: "saintAloysiusGonzagaReligious",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 21 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPaulinusOfNolaBishopSaintsJohnFisherBishopAndThomasMoreMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 22 }),
        },
        {
            key: "saintCyrilOfAlexandriaBishopAndDoctor",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 27 }),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintIrenaeusBishopAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 28 }),
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
            moment: moment.utc({ year, month: 5, day: 30 }),
        },
        {
            key: "saintThomasTheApostle",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 3 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintElizabethOfPortugal",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 4 }),
        },
        {
            key: "saintAnthonyZaccariaPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 5 }),
        },
        {
            key: "saintMariaGorettiVirginAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 6 }),
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
            moment: moment.utc({ year, month: 6, day: 9 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintBenedictOfNursiaAbbot",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 11 }),
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
            moment: moment.utc({ year, month: 6, day: 13 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintCamillusDeLellisPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 14 }),
        },
        {
            key: "saintBonaventureBishopAndDoctor",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 15 }),
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
            moment: moment.utc({ year, month: 6, day: 16 }),
        },
        {
            key: "saintApollinaris",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 20 }),
        },
        {
            key: "saintLawrenceOfBrindisiPriestAndDoctor",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 21 }),
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
            moment: moment.utc({ year, month: 6, day: 22 }),
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
            moment: ((y: number): moment.Moment =>
                moment.utc(
                    Dates.pentecostSunday(y)
                        .add(1, "day")
                        .toISOString(),
                ))(year),
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
            moment: moment.utc({ year, month: 6, day: 23 }),
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
            moment: moment.utc({ year, month: 6, day: 24 }),
        },
        {
            key: "saintJamesApostle",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 25 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsJoachimAndAnne",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 26 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintMartha",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 29 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPeterChrysologusBishopAndDoctor",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 30 }),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintIgnatiusOfLoyolaPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 31 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAlphonsusMariaDeLiguoriBishopAndDoctorOfTheChurch",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 1 }),
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
            moment: moment.utc({ year, month: 7, day: 2 }),
        },
        {
            key: "saintJeanVianneyTheCureOfArsPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 4 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "dedicationOfTheBasilicaOfSaintMaryMajor",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 5 }),
        },
        {
            key: "saintSixtusIiPopeAndCompanionsMartyrsSaintCajetanPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 7 }),
        },
        {
            key: "saintDominicPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 8 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 9 }),
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
            moment: moment.utc({ year, month: 7, day: 10 }),
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
            moment: moment.utc({ year, month: 7, day: 11 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJaneFrancesDeChantalReligious",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 12 }),
        },
        {
            key: "saintsPontianPopeAndHippolytusPriestMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 13 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintMaximilianMaryKolbePriestAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 14 }),
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
            moment: moment.utc({ year, month: 7, day: 16 }),
        },
        {
            key: "saintJohnEudesPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 19 }),
        },
        {
            key: "saintBernardOfClairvauxAbbotAndDoctorOfTheChurch",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 20 }),
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
            moment: moment.utc({ year, month: 7, day: 21 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "queenshipOfBlessedVirginMary",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 22 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintRoseOfLima",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 23 }),
        },
        {
            key: "saintBartholomewTheApostle",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 7, day: 24 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintLouisSaintJosephOfCalasanzPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 25 }),
        },
        {
            key: "saintMonica",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 27 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAugustineOfHippoBishopAndDoctorOfTheChurch",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 28 }),
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
            moment: moment.utc({ year, month: 7, day: 29 }),
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
            moment: moment.utc({ year, month: 8, day: 3 }),
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
            moment: moment.utc({ year, month: 8, day: 8 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPeterClaverPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 9 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "holyNameOfTheBlessedVirginMary",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 12 }),
        },
        {
            key: "saintJohnChrysostomBishopAndDoctor",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 13 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "theExaltationOfTheHolyCross",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 8, day: 14 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                },
            },
        },
        {
            key: "ourLadyOfSorrows",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 15 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsCorneliusPopeAndCyprianBishopMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 16 }),
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
            moment: moment.utc({ year, month: 8, day: 17 }),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintJanuariusBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 19 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintAndrewKimTaegonPriestAndPaulChongHasangAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 20 }),
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
            moment: moment.utc({ year, month: 8, day: 21 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPioOfPietrelcinaPadrePioPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 23 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsCosmasAndDamianMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 26 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintVincentDePaulPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 27 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintWenceslausMartyrSaintsLawrenceRuizAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 28 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintsMichaelGabrielAndRaphaelArchangels",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 8, day: 29 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJeromePriestAndDoctor",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 30 }),
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
            moment: moment.utc({ year, month: 9, day: 1 }),
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
            moment: moment.utc({ year, month: 9, day: 2 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFrancisOfAssisi",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 4 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintBrunoPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 6 }),
        },
        {
            key: "ourLadyOfTheRosary",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 7 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintDenisAndCompanionsMartyrsSaintJohnLeonardiPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 9 }),
        },
        // http://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20140529_decreto-calendario-generale-gxxiii-gpii_en.html
        {
            key: "popeSaintJohnXXIII",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 11 }),
        },
        // http://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20140529_decreto-calendario-generale-gxxiii-gpii_en.html
        {
            key: "popeSaintJohnPaulII",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 22 }),
        },
        {
            key: "saintCallistusIPopeAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 14 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintTeresaOfJesusVirginAndDoctorOfTheChurch",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 15 }),
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
            moment: moment.utc({ year, month: 9, day: 16 }),
        },
        {
            key: "saintIgnatiusOfAntiochBishopAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 17 }),
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
            moment: moment.utc({ year, month: 9, day: 18 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsJeanDeBrebeufAndIsaacJoguesPriestsAndCompanionsMartyrsSaintPaulOfTheCrossPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 19 }),
        },
        {
            key: "saintJohnOfCapistranoPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 23 }),
        },
        {
            key: "saintAnthonyMaryClaretBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 24 }),
        },
        {
            key: "saintsSimonAndJudeApostles",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 9, day: 28 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "allSouls",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 10, day: 2 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintMartinDePorresReligious",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 3 }),
        },
        {
            key: "saintCharlesBorromeoBishop",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 4 }),
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
            moment: moment.utc({ year, month: 10, day: 9 }),
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
            moment: moment.utc({ year, month: 10, day: 10 }),
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
            moment: moment.utc({ year, month: 10, day: 11 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJosaphatBishopAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 12 }),
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
            moment: moment.utc({ year, month: 10, day: 15 }),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintMargaretOfScotlandSaintGertrudeTheGreatVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 16 }),
        },
        {
            key: "saintElizabethOfHungary",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 17 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "dedicationOfTheBasilicasOfSaintsPeterAndPaulApostles",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 18 }),
        },
        {
            key: "presentationOfTheBlessedVirginMary",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 21 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintCeciliaVirginAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 22 }),
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
            moment: moment.utc({ year, month: 10, day: 23 }),
        },
        {
            key: "saintAndrewDungLacAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 24 }),
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
            moment: moment.utc({ year, month: 10, day: 25 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintAndrewTheApostle",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 10, day: 30 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFrancisXavierPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 3 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJohnDamascenePriestAndDoctor",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 4 }),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintNicholasBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 6 }),
        },
        {
            key: "saintAmbroseBishopAndDoctor",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 7 }),
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
            moment: moment.utc({ year, month: 11, day: 9 }),
        },
        {
            key: "ourLadyOfLoreto",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 10 }),
        },
        {
            key: "saintDamasusIPope",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 11 }),
        },
        {
            key: "ourLadyOfGuadalupe",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 12 }),
        },
        {
            key: "saintLucyOfSyracuseVirginAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 13 }),
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
            moment: moment.utc({ year, month: 11, day: 14 }),
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
            moment: moment.utc({ year, month: 11, day: 21 }),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintJohnOfKantyPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 23 }),
        },
        {
            key: "saintStephenTheFirstMartyr",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 11, day: 26 }),
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
            moment: moment.utc({ year, month: 11, day: 27 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "holyInnocentsMartyrs",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 11, day: 28 }),
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
            moment: moment.utc({ year, month: 11, day: 29 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintSylvesterIPope",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 31 }),
        },
    ];

    return _dates.map(({ key, data, ...rest }: IRomcalDateItem) => {
        return {
            ...rest,
            name: Utils.localize({ key: `sanctoral.${key}` }),
            data: {
                ...data,
                meta: {
                    ...data?.meta,
                    titles: [],
                },
            },
        };
    });
};

export { defaultConfig, dates };
