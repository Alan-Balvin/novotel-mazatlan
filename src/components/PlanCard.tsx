
interface PlanCardProps {
    name: string;
    imageUrl: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ name, imageUrl }) => (
    <div className="border rounded p-2">
        <h2 className="font-semibold mb-2">{name}</h2>
        <img src={imageUrl} alt={name} className="w-full" />
    </div>
);

export default PlanCard