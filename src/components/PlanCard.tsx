
interface PlanCardProps {
    name: string;
    imageUrl: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ name, imageUrl }) => (
    <div className="border rounded p-2">
        <h2 className="font-semibold mb-2">{name}</h2>
        <embed src={imageUrl} type="application/pdf" className="w-full h-96" />
    </div>
);

export default PlanCard