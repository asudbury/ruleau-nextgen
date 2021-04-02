import GetCasesSelector from "./GetCasesSelector";

export default function GetCaseSelector(caseId: string): any {
  const cases = GetCasesSelector();

  if (cases.payload) {
    if (Array.isArray(cases.payload)) {
      return cases.payload.find((item: { id: string; }) => {
        return item.id === caseId;
      });
    }
  }

  return null;
}
