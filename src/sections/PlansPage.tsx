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
    // 🔴 Temporal: simular respuesta de API
    await new Promise((res) => setTimeout(res, 1000)); // simula delay

    const data: PlansResponse = {
      plans: [
        { id: "1", name: "Plano 1", imageUrl: "https://pablo-architect-planos.s3.us-east-2.amazonaws.com/blueprints/NOV-IE-AAC-AZA1-01.pdf" },
        { id: "2", name: "Plano 2", imageUrl: "https://pablo-architect-planos.s3.us-east-2.amazonaws.com/blueprints/NOV-IE-AAC-AZA1-02.pdf" },
      ],
    };

    setPlans(data.plans);
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
      
      {loading && <p>loading plans...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {plans.map((plan) => (
          <PlanCard key={plan.id} name={plan.name} imageUrl={plan.imageUrl}/>
        ))}
        <h1 className="text-2xl font-bold mb-4">Plans</h1>
      </div>
    </div>
  );
};

export default PlansPage;
