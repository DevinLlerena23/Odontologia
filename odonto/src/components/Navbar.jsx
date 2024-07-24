import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';  
import { Link } from 'react-router-dom';

export default function TemplateDemo() {
    const itemRenderer = (item) => (
        <Link to={item.path} className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </Link>
    );
    const items = [
        {
            label: 'Pacientes',
            icon: 'pi pi-user',
            path: '/home/pacientes',
            template: itemRenderer
        },
        {
            label: 'Fichas Tecnicas',
            icon: 'pi pi-address-book',
            path: '/home/fichas',
            template: itemRenderer
        },
        {
            label: 'Odontogramas',
            icon: 'pi pi-calendar',
            path: '/home/odontogramas',
            template: itemRenderer
        }
    ];

    const start = (
        <Link to="/home">
            <img alt="logo" src="https://cdn.discordapp.com/attachments/1054461321808187434/1265495940022669312/diente.png?ex=66a1b86f&is=66a066ef&hm=96b83d8912cfbcb0e8ffaf8f9fa302da1236f251b7a886117029159b396be88e&" height="40" className="mr-2" />
        </Link>
    );
    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
        </div>
    );

    return (

        <div className="card">
            <style>{`
span.flag {
    width: 44px;
    height: 30px;
    display: inline-block;
}
img.flag {
    width: 30px;
}
.flag {
    background: url(https://primefaces.org/cdn/primereact/images/flag/flags_responsive.png)
        no-repeat;
    background-size: 100%;
    vertical-align: middle;
}
.flag-ad {
    background-position: 0 0.413223%;
}
.flag-ae {
    background-position: 0 0.826446%;
}
.flag-af {
    background-position: 0 1.239669%;
}
.flag-ag {
    background-position: 0 1.652893%;
}
.flag-ai {
    background-position: 0 2.066116%;
}
.flag-al {
    background-position: 0 2.479339%;
}
.flag-am {
    background-position: 0 2.892562%;
}
.flag-an {
    background-position: 0 3.305785%;
}
.flag-ao {
    background-position: 0 3.719008%;
}
.flag-aq {
    background-position: 0 4.132231%;
}
.flag-ar {
    background-position: 0 4.545455%;
}
.flag-as {
    background-position: 0 4.958678%;
}
.flag-at {
    background-position: 0 5.371901%;
}
.flag-au {
    background-position: 0 5.785124%;
}
.flag-aw {
    background-position: 0 6.198347%;
}
.flag-az {
    background-position: 0 6.61157%;
}
.flag-ba {
    background-position: 0 7.024793%;
}
.flag-bb {
    background-position: 0 7.438017%;
}
.flag-bd {
    background-position: 0 7.85124%;
}
.flag-be {
    background-position: 0 8.264463%;
}
.flag-bf {
    background-position: 0 8.677686%;
}
.flag-bg {
    background-position: 0 9.090909%;
}
.flag-bh {
    background-position: 0 9.504132%;
}
.flag-bi {
    background-position: 0 9.917355%;
}
.flag-bj {
    background-position: 0 10.330579%;
}
.flag-bm {
    background-position: 0 10.743802%;
}
.flag-bn {
    background-position: 0 11.157025%;
}
.flag-bo {
    background-position: 0 11.570248%;
}
.flag-br {
    background-position: 0 11.983471%;
}
.flag-bs {
    background-position: 0 12.396694%;
}
.flag-bt {
    background-position: 0 12.809917%;
}
.flag-bv {
    background-position: 0 13.22314%;
}
.flag-bw {
    background-position: 0 13.636364%;
}
.flag-by {
    background-position: 0 14.049587%;
}
.flag-bz {
    background-position: 0 14.46281%;
}
.flag-ca {
    background-position: 0 14.876033%;
}
.flag-cc {
    background-position: 0 15.289256%;
}
.flag-cd {
    background-position: 0 15.702479%;
}
.flag-cf {
    background-position: 0 16.115702%;
}
.flag-cg {
    background-position: 0 16.528926%;
}
.flag-ch {
    background-position: 0 16.942149%;
}
.flag-ci {
    background-position: 0 17.355372%;
}
.flag-ck {
    background-position: 0 17.768595%;
}
.flag-cl {
    background-position: 0 18.181818%;
}
.flag-cm {
    background-position: 0 18.595041%;
}
.flag-cn {
    background-position: 0 19.008264%;
}
.flag-co {
    background-position: 0 19.421488%;
}
.flag-cr {
    background-position: 0 19.834711%;
}
.flag-cu {
    background-position: 0 20.247934%;
}
.flag-cv {
    background-position: 0 20.661157%;
}
.flag-cx {
    background-position: 0 21.07438%;
}
.flag-cy {
    background-position: 0 21.487603%;
}
.flag-cz {
    background-position: 0 21.900826%;
}
.flag-de {
    background-position: 0 22.31405%;
}
.flag-dj {
    background-position: 0 22.727273%;
}
.flag-dk {
    background-position: 0 23.140496%;
}
.flag-dm {
    background-position: 0 23.553719%;
}
.flag-do {
    background-position: 0 23.966942%;
}
.flag-dz {
    background-position: 0 24.380165%;
}
.flag-ec {
    background-position: 0 24.793388%;
}
.flag-ee {
    background-position: 0 25.206612%;
}
.flag-eg {
    background-position: 0 25.619835%;
}
.flag-eh {
    background-position: 0 26.033058%;
}
.flag-er {
    background-position: 0 26.446281%;
}
.flag-es {
    background-position: 0 26.859504%;
}
.flag-et {
    background-position: 0 27.272727%;
}
.flag-fi {
    background-position: 0 27.68595%;
}
.flag-fj {
    background-position: 0 28.099174%;
}
.flag-fk {
    background-position: 0 28.512397%;
}
.flag-fm {
    background-position: 0 28.92562%;
}
.flag-fo {
    background-position: 0 29.338843%;
}
.flag-fr {
    background-position: 0 29.752066%;
}
.flag-ga {
    background-position: 0 30.165289%;
}
.flag-gd {
    background-position: 0 30.578512%;
}
.flag-ge {
    background-position: 0 30.991736%;
}
.flag-gf {
    background-position: 0 31.404959%;
}
.flag-gh {
    background-position: 0 31.818182%;
}
.flag-gi {
    background-position: 0 32.231405%;
}
.flag-gl {
    background-position: 0 32.644628%;
}
.flag-gm {
    background-position: 0 33.057851%;
}
.flag-gn {
    background-position: 0 33.471074%;
}
.flag-gp {
    background-position: 0 33.884298%;
}
.flag-gq {
    background-position: 0 34.297521%;
}
.flag-gr {
    background-position: 0 34.710744%;
}
.flag-gs {
    background-position: 0 35.123967%;
}
.flag-gt {
    background-position: 0 35.53719%;
}
.flag-gu {
    background-position: 0 35.950413%;
}
.flag-gw {
    background-position: 0 36.363636%;
}
.flag-gy {
    background-position: 0 36.77686%;
}
.flag-hk {
    background-position: 0 37.190083%;
}
.flag-hm {
    background-position: 0 37.603306%;
}
.flag-hn {
    background-position: 0 38.016529%;
}
.flag-hr {
    background-position: 0 38.429752%;
}
.flag-ht {
    background-position: 0 38.842975%;
}
.flag-hu {
    background-position: 0 39.256198%;
}
.flag-id {
    background-position: 0 39.669421%;
}
.flag-ie {
    background-position: 0 40.082645%;
}
.flag-il {
    background-position: 0 40.495868%;
}
.flag-in {
    background-position: 0 40.909091%;
}
.flag-io {
    background-position: 0 41.322314%;
}
.flag-iq {
    background-position: 0 41.735537%;
}
.flag-ir {
    background-position: 0 42.14876%;
}
.flag-is {
    background-position: 0 42.561983%;
}
.flag-it {
    background-position: 0 42.975207%;
}
.flag-jm {
    background-position: 0 43.38843%;
}
.flag-jo {
    background-position: 0 43.801653%;
}
.flag-jp {
    background-position: 0 44.214876%;
}
.flag-ke {
    background-position: 0 44.628099%;
}
.flag-kg {
    background-position: 0 45.041322%;
}
.flag-kh {
    background-position: 0 45.454545%;
}
.flag-ki {
    background-position: 0 45.867769%;
}
.flag-km {
    background-position: 0 46.280992%;
}
.flag-kn {
    background-position: 0 46.694215%;
}
.flag-kp {
    background-position: 0 47.107438%;
}
.flag-kr {
    background-position: 0 47.520661%;
}
.flag-kw {
    background-position: 0 47.933884%;
}
.flag-ky {
    background-position: 0 48.347107%;
}
.flag-kz {
    background-position: 0 48.760331%;
}
.flag-la {
    background-position: 0 49.173554%;
}
.flag-lb {
    background-position: 0 49.586777%;
}
.flag-lc {
    background-position: 0 50%;
}
.flag-li {
    background-position: 0 50.413223%;
}
.flag-lk {
    background-position: 0 50.826446%;
}
.flag-lr {
    background-position: 0 51.239669%;
}
.flag-ls {
    background-position: 0 51.652893%;
}
.flag-lt {
    background-position: 0 52.066116%;
}
.flag-lu {
    background-position: 0 52.479339%;
}
.flag-lv {
    background-position: 0 52.892562%;
}
.flag-ly {
    background-position: 0 53.305785%;
}
.flag-ma {
    background-position: 0 53.719008%;
}
.flag-mc {
    background-position: 0 54.132231%;
}
.flag-md {
    background-position: 0 54.545455%;
}
.flag-me {
    background-position: 0 54.958678%;
}
.flag-mg {
    background-position: 0 55.371901%;
}
.flag-mh {
    background-position: 0 55.785124%;
}
.flag-mk {
    background-position: 0 56.198347%;
}
.flag-ml {
    background-position: 0 56.61157%;
}
.flag-mm {
    background-position: 0 57.024793%;
}
.flag-mn {
    background-position: 0 57.438017%;
}
.flag-mo {
    background-position: 0 57.85124%;
}
.flag-mp {
    background-position: 0 58.264463%;
}
.flag-mq {
    background-position: 0 58.677686%;
}
.flag-mr {
    background-position: 0 59.090909%;
}
.flag-ms {
    background-position: 0 59.504132%;
}
.flag-mt {
    background-position: 0 59.917355%;
}
.flag-mu {
    background-position: 0 60.330579%;
}
.flag-mv {
    background-position: 0 60.743802%;
}
.flag-mw {
    background-position: 0 61.157025%;
}
.flag-mx {
    background-position: 0 61.570248%;
}
.flag-my {
    background-position: 0 61.983471%;
}
.flag-mz {
    background-position: 0 62.396694%;
}
.flag-na {
    background-position: 0 62.809917%;
}
.flag-nc {
    background-position: 0 63.22314%;
}
.flag-ne {
    background-position: 0 63.636364%;
}
.flag-nf {
    background-position: 0 64.049587%;
}
.flag-ng {
    background-position: 0 64.46281%;
}
.flag-ni {
    background-position: 0 64.876033%;
}
.flag-nl {
    background-position: 0 65.289256%;
}
.flag-no {
    background-position: 0 65.702479%;
}
.flag-np {
    background-position: 0 66.115702%;
}
.flag-nr {
    background-position: 0 66.528926%;
}
.flag-nu {
    background-position: 0 66.942149%;
}
.flag-nz {
    background-position: 0 67.355372%;
}
.flag-om {
    background-position: 0 67.768595%;
}
.flag-pa {
    background-position: 0 68.181818%;
}
.flag-pe {
    background-position: 0 68.595041%;
}
.flag-pf {
    background-position: 0 69.008264%;
}
.flag-pg {
    background-position: 0 69.421488%;
}
.flag-ph {
    background-position: 0 69.834711%;
}
.flag-pk {
    background-position: 0 70.247934%;
}
.flag-pl {
    background-position: 0 70.661157%;
}
.flag-pm {
    background-position: 0 71.07438%;
}
.flag-pn {
    background-position: 0 71.487603%;
}
.flag-pr {
    background-position: 0 71.900826%;
}
.flag-pt {
    background-position: 0 72.31405%;
}
.flag-pw {
    background-position: 0 72.727273%;
}
.flag-py {
    background-position: 0 73.140496%;
}
.flag-qa {
    background-position: 0 73.553719%;
}
.flag-re {
    background-position: 0 73.966942%;
}
.flag-ro {
    background-position: 0 74.380165%;
}
.flag-rs {
    background-position: 0 74.793388%;
}
.flag-ru {
    background-position: 0 75.206612%;
}
.flag-rw {
    background-position: 0 75.619835%;
}
.flag-sa {
    background-position: 0 76.033058%;
}
.flag-sb {
    background-position: 0 76.446281%;
}
.flag-sc {
    background-position: 0 76.859504%;
}
.flag-sd {
    background-position: 0 77.272727%;
}
.flag-se {
    background-position: 0 77.68595%;
}
.flag-sg {
    background-position: 0 78.099174%;
}
.flag-sh {
    background-position: 0 78.512397%;
}
.flag-si {
    background-position: 0 78.92562%;
}
.flag-sj {
    background-position: 0 79.338843%;
}
.flag-sk {
    background-position: 0 79.752066%;
}
.flag-sl {
    background-position: 0 80.165289%;
}
.flag-sm {
    background-position: 0 80.578512%;
}
.flag-sn {
    background-position: 0 80.991736%;
}
.flag-so {
    background-position: 0 81.404959%;
}
.flag-sr {
    background-position: 0 81.818182%;
}
.flag-ss {
    background-position: 0 82.231405%;
}
.flag-st {
    background-position: 0 82.644628%;
}
.flag-sv {
    background-position: 0 83.057851%;
}
.flag-sy {
    background-position: 0 83.471074%;
}
.flag-sz {
    background-position: 0 83.884298%;
}
.flag-tc {
    background-position: 0 84.297521%;
}
.flag-td {
    background-position: 0 84.710744%;
}
.flag-tf {
    background-position: 0 85.123967%;
}
.flag-tg {
    background-position: 0 85.53719%;
}
.flag-th {
    background-position: 0 85.950413%;
}
.flag-tj {
    background-position: 0 86.363636%;
}
.flag-tk {
    background-position: 0 86.77686%;
}
.flag-tl {
    background-position: 0 87.190083%;
}
.flag-tm {
    background-position: 0 87.603306%;
}
.flag-tn {
    background-position: 0 88.016529%;
}
.flag-to {
    background-position: 0 88.429752%;
}
.flag-tp {
    background-position: 0 88.842975%;
}
.flag-tr {
    background-position: 0 89.256198%;
}
.flag-tt {
    background-position: 0 89.669421%;
}
.flag-tv {
    background-position: 0 90.082645%;
}
.flag-tw {
    background-position: 0 90.495868%;
}
.flag-ty {
    background-position: 0 90.909091%;
}
.flag-tz {
    background-position: 0 91.322314%;
}
.flag-ua {
    background-position: 0 91.735537%;
}
.flag-ug {
    background-position: 0 92.14876%;
}
.flag-gb,
.flag-uk {
    background-position: 0 92.561983%;
}
.flag-um {
    background-position: 0 92.975207%;
}
.flag-us {
    background-position: 0 93.38843%;
}
.flag-uy {
    background-position: 0 93.801653%;
}
.flag-uz {
    background-position: 0 94.214876%;
}
.flag-va {
    background-position: 0 94.628099%;
}
.flag-vc {
    background-position: 0 95.041322%;
}
.flag-ve {
    background-position: 0 95.454545%;
}
.flag-vg {
    background-position: 0 95.867769%;
}
.flag-vi {
    background-position: 0 96.280992%;
}
.flag-vn {
    background-position: 0 96.694215%;
}
.flag-vu {
    background-position: 0 97.107438%;
}
.flag-wf {
    background-position: 0 97.520661%;
}
.flag-ws {
    background-position: 0 97.933884%;
}
.flag-ye {
    background-position: 0 98.347107%;
}
.flag-za {
    background-position: 0 98.760331%;
}
.flag-zm {
    background-position: 0 99.173554%;
}
.flag-zr {
    background-position: 0 99.586777%;
}
.flag-zw {
    background-position: 0 100%;
}`}
 </style>
            <Menubar model={items} start={start} end={end} />
        </div>

    )
}
        