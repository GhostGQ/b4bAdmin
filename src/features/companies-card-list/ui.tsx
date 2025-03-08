import { useGetCompaniesQuery } from "@entities/company/api/api-company";
import { PageCardsList } from "@shared/ui/Markup"


export const CompaniesCardList = () => {
  const {data: companies, isLoading} = useGetCompaniesQuery(null);

  return (
    <PageCardsList >
      
    </PageCardsList>
  )
}
