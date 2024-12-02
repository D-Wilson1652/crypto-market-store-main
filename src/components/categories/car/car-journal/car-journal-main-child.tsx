const CarJournalMainChild = () => {
    return (
        <div className="flex items-center justify-center gap-6">
            <img
                src="/images/categories/car/the-journal/car-the-journal-main-1.png"
                alt="Journal Main"
                className={styles.imageCommon}
                draggable="false"
            />

            <img
                src="/images/categories/car/the-journal/car-the-journal-main-2.png"
                alt="Journal Main"
                className="2xl:w-6/12 2xl:h-6/12 4xl:w-[275px] 4xl:h-[360px] object-cover object-center rounded-2xl"
                draggable="false"
            />

            <img
                src="/images/categories/car/the-journal/car-the-journal-main-3.png"
                alt="Journal Main"
                className={styles.imageCommon}
                draggable="false"
            />
        </div>
    );
};

const styles = {
    imageCommon:
        "w-[215px] h-[200px] object-cover object-center rounded-2xl hidden 4xl:block",
};

export default CarJournalMainChild;
