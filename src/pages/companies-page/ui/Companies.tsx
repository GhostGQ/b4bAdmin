import {useGetCompaniesQuery} from '@entities/company/api/api-company';
import {PageContainer, PageHeader} from '@shared/ui/Markup';

export const Companies = () => {
  const {data: companies, isLoading} = useGetCompaniesQuery(null);
  const isEmpty = companies ? Object.keys(companies).length === 0 : false;

  return (
    <PageContainer>
      <PageHeader
        title='Korxonalarim'
        buttonText='Korxona yaratish'
        isEmpty={isEmpty}
        isLoading={isLoading}
      />
    </PageContainer>
  );
};
