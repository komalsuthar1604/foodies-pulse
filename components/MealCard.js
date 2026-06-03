import styles from './MealCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
export default function MealCard({ meal }) {
    const {id , title , description, image , author , likes , category } = meal;
    return (
        <Link href={`/meals/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className={styles.mealCard}>
                <Image src={image} alt={title} width={500} height={500} className={styles.mealImage} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.meta}>
                    <span className={styles.author}>By {author}</span>
                    <span className={styles.likes}>{likes} Likes</span>
                </div>
                <div className={styles.category}>{category}</div>

            </div>
        </Link>
    )
}