import { useEffect, useState } from "react";
import PlanCard from "../components/PlanCard";

interface Blueprint {
  id: string;
  name: string;
  imageUrl: string;
}
interface PlansResponse {
  plans: Blueprint[];
}

const PlansPage: React.FC = () => {
  const [plans, setPlans] = useState<Blueprint[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPlans = async () => {
    setLoading(true);
    setError(null);
    try {
      const rest = await fetch(
        "https://electrical-blueprints.vercel.app/api/get-plans"
      );
      if (!rest.ok) throw new Error("failed to upload plans");
      const data: PlansResponse = await rest.json();
      setPlans(data.plans || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Plans</h1>
      {loading && <p>loading plans...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {plans.map((plan) => (
          <PlanCard key={plan.id} name={plan.name} imageUrl={plan.imageUrl}/>
        ))}
      </div>
    </div>
  );
};

export default PlansPage;
