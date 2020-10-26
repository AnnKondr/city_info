import React from 'react';
import './Home.css';


export default function Home() {
    return (
        <>
            <h1 className="text-center p-4">Хуст</h1>
            {/* Regalia */}
            <div className="card-group">
                <div className="card ">
                    <img src="../img/Hust_gerb.png" className="card-img-top gerb mt-3" alt="Герб Хуста" />
                    <div className="card-body">
                        <h5 className="card-title">Герб Хуста</h5>
                        <p className="card-text">У сучасному гербі міста поєднано герби австрійського і радянського періодів. Сучасний герб являє собою щит на синьому полі якого дві срібні стріли перехрещені, срібний півмісяць і дві золоті шестипроменеві зірки, під якими розміщено золотий замок, у нижній частині якого посередині зображено коло з вписаною в нього срібною квіткою з червоною серединою, яка символізує долину нарцисів, що знаходиться біля міста. Вгорі на синій планці срібний напис з назвою міста — «ХУСТ». У синій хвилястій основі — срібні хвилі які символізують річки Тиса і Ріки.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="../img/09904974.png" className="card-img-top flag mt-3" alt="Прапор" />
                    <div className="card-body">
                        <h5 className="card-title">Прапор</h5>
                        <p className="card-text">Пра́пор — графічне зображення незалежної країни та її вільних громадян; полотнище правильної геометричної (найчастіше, прямокутної) форми, підвішене на жердині, або щоглі, що зображує певну комбінацію кольорів і символів та зазвичай використовується для ідентифікації (держав, регіонів, міст, організацій, військових з'єднань) та сигналювання. Вивченням прапорів займається наука вексилологія.</p>
                    </div>
                </div>
            </div>

            {/* About */}

            <div className="card border-0">
                <div className="card-body">
                    <strong>Хуст</strong> (угор. Huszt, словац. Chust, нім. Chust, рум. Hust, їд. חוסט‎) — місто в Закарпатській області України,
            центр Хустської міської громади та Хустського району. Географічно місто розташоване в Карпатах у Верхньотисинській
            улоговині у місці впадіння Ріки до Тиси. 2011 року <strong>чисельність</strong> населення становила <strong>28 438 осіб</strong>.
            </div>
                <div className="row alert-primary py-2">
                    <div className="col-6">
                        <div className="card-body py-0">
                            Країна - <strong>Україна</strong>
                        </div>
                        <div className="card-body py-0">
                            Регіон - <strong>Закарпатська область</strong>
                        </div>
                        <div className="card-body py-0">
                            Засноване - <strong>1090р</strong>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card-body py-0">
                            Висота над рівнем моря - <strong>164 м</strong>
                        </div>

                        <div className="card-body py-0">
                            Водойми	- <strong>р. Тиса, Ріка, Хустець</strong>
                        </div>
                        <div className="card-body py-0">
                            День міста - <strong>2 неділя травня</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}