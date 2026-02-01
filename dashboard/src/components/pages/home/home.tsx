import { DefaultCard } from "../../organisms/card/default-card/default-card";
import { TableComponent } from "../../organisms/table/table";
import { DashboardTemplate } from "../../templates/dashboard/dashboard";

export const HomePage = () => {
  return (
    <DashboardTemplate>
      <DefaultCard>
        <TableComponent
          columns={[
            { key: "name", label: "Name" },
            { key: "code", label: "ISO Code" },
          ]}
          data={[
            { name: "India", code: "IN" },
            { name: "United States", code: "US" },
            { name: "Canada", code: "CA" },
            { name: "Germany", code: "DE" },
          ]}
          totalItems={20}
          take={10}
          skip={2}
          onPageChange={() => alert("page change")}
          onRowsPerPageChange={(n: number) => alert(`rows per page change: ${n}`)}
        />
      </DefaultCard>
    </DashboardTemplate>
  );
};
