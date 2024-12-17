import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-rehab-red/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-rehab-red" />
      </div>
      <h3 className="text-xl font-semibold text-rehab-black mb-2">{title}</h3>
      <p className="text-rehab-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;