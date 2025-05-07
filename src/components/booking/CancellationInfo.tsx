
import React from "react";

const CancellationInfo = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-rehab-red">
      <p className="font-bold text-gray-800 mb-2">Avbokning:</p>
      <p className="text-gray-700">
        Avbokning eller ombokning måste ske minst 24 timmar i förväg.<br />
        Uteblivet besök eller försenad avbokning debiteras med 400 kr enligt Region Gävleborgs taxa.
      </p>
    </div>
  );
};

export default CancellationInfo;
