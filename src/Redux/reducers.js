let myStore = {
    username: 'aldwin',
    password : 'aldwinhacktiv8',
    logon : false,
    indo : ["amin","opium","candu","bibi","saudara perempuan ibu","menyatakan keheranan","ketidakpuasan","menyatakan perasaan terkejut","heran","duka cita","sedih","bersedih","berduka cita","perasaan duka","menderita","menunda","mengulur waktu","kena pukul","dipukul","didera","putih bersih","putih salju","tumor ganas","kanker","penyakit kanker","pendek","rendah","gemuk","kecil","ramah","sabar","ramah tamah","berakhir","berhenti","aids","cinta","kasih sayang","suka","gemar","tertarik","menghargai","sering","mudah","cinta tanah air","kegemaran","hobi","sangat menyukai","cinta","asmara","suami","istri","kekasih","menghalangi","merintangi","mengganggu","merintangi","mengganggu","masalah","tenang","selamat","aman","menenangkan","memasang","menambah","berniat","mantap","tenang","stabil","terbang melayang - layang","terbang","begadang","berjaga semalam suntuk","merebus","menahan","pesiar","tamasya","berwisata","pesiar berwisata","lensa cekung","cermin cekung","lekuk","cekung","berlimpah","meluap","meluber","meluap","sangat mahal","mengangkat kepala","mendongak","kotor","dekil","mengisyaratkan","tersembunyi","menyembunyikan","gelap","suram","pudar","tersembunyi","rahasia","samar-samar","kabur","perkara","kasus","meja","perkara","kasus hukum","catatan","arsip","usulan","proposal","menurut","sesuai dengan","berdasarkan","tepat waktu","tombol","memijat","menekan","menunda","menangguhkan","mengendalikan","menguasai","menurut","berdasarkan","catatan","pantai","pesisir","pelana","pondok","gubuk","merasa tenang","lega","dengan tenang","aman","selamat","mengatur","sehat","tenang","tentram","menyesal","sesal","menyesal","risau","kesal","misterius","rahasia","dalam","sukar dimengerti","muskil","kesombongan","keangkuhan","sombong","tinggi hati","sombong","tinggi hati","angkuh","pantang menyerah","mencabut","membuang","membersihkan","mencabut","menyekop","memilih","meninggalkan","menonjol","lebih tinggi","berpegang","memegang","menggali","membongkar","merobohkan","menyibak","telapak tangan","menunggu dengan cemas","dekat","melekat","menempel","retak","nama marga","agustus","delapan puluh persen","delapan","berhenti","membebastugaskan","selesai","ayah","bapak","tanggul","dataran","tanah datar","gagang","pegangan","tangkai"],
    english : ["amen", "opium", "opium", "aunt", "mother's sister", "expressing astonishment", "dissatisfaction", "expressing feelings of surprise", "wonder", "sadness", "sadness" ,"sad", "grieving", "feeling grief", "suffering", "delaying", "stalling for time,", "hit", "beaten", "whipped", "pure white", "snow white", "malignant tumors", "cancer", "cancer", "short", "low", "fat", "small", "friendly", "patient", "friendly", "end", "stop" , "aids", "love", "love", "like", "love", "interested", "appreciate", "often", "easy", "love homeland", "hobby", "hobby", "very fond of" ," love "," romance "," husband "," wife "," lover "," blocking "," obstructing "," disturbing "," obstructing "," disturbing "," problem " , "calm", "congratulations", "safe", "calm", "install", "add", "intend", "steady", "calm", "stable", "fly", "fly"," staying up "," staying up all night "," boiling "," holding "," cruise "," sightseeing "," traveling "," cruise tours "," concave lenses "," concave mirrors "," curves " , "sunken", "abundant", "overflowing", "melube r "," overflow "," very expensive "," lift head "," look up "," dirty "," dirty "," hint "," hidden "," hide "," dark "," gloomy "," faded "," hidden "," secret "," vague "," blurred "," case "," case "," table "," case "," legal case "," note "," archive ", "proposal", "proposal", "according to", "according to", "based on", "on time", "button", "massage", "press", "delay", "suspend", "control", "master", "according to", "based on", "note", "beach", "coastal", "saddle", "hut", "hut", "feeling calm", "relieved", "calmly", "safe", "safe", "regulate", "healthy", "calm", "calm", "regret", "regret", "regret", "worry", "upset", "mysterious", "secret" ," in "," difficult to understand "," abstruse "," pride "," arrogance "," arrogant "," proud "," arrogant "," proud "," arrogant "," never give up ", "revoke", "discard", "delete", "revoke", "shovel", "choose", "leave", "stand out", "higher", "hold", "hold", "dig", " dismantle "," knock down "," uncover "," palms "," waiting anxiously "," close "," attached "," sticking "," cracking "," clan name "," August "," eighty percent "," eight "," stop "," releasing "," finished "," father "," father "," embankment "," plain "," flat land "," handle ", "handle", "handle"]
}

const myReducer = (state = {...myStore}, action) => {
    switch(action.type){
        case('LOGIN'):
            if(action.payload.username === state.username && action.payload.password === state.password){
                return({
                    ...state,
                    logon : true
                })
            }else{
                return({
                    ...state,
                    logon : false
                })
            }            
        case('DECREMENT'):
            return({
                ...state,
                angka: state.angka -= action.payload
            })
        case('ADDUSERTOSTORE'):
            return({
                ...state,
                people: action.payload.map(orang => {
                    return orang.name + ", "
                  })
            })
        default:
            return state
    }
}

export default myReducer