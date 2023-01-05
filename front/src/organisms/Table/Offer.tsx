import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  DataGrid,
} from "@mui/x-data-grid";

import "./table.css"

export default function UserTable(props:any) {
    const { offers, icon } = props;
    const columns = [
        { field: 'id', headerName: 'ID', editable: false },
        { field: 'companyname', headerName: 'Entreprise', width: 250, },
        { field: 'title', headerName: 'Titre', sortable: false },
        { field: 'description', headerName: 'Description', sortable: false },
        { field: 'contracttype', headerName: 'Type de contrat', sortable: false, width: 200, },
      ];

    return (
      <Box className="tabs-content">
        <Box style={{ display: "flex", height: "100%" }}>
          <Box style={{ flexGrow: 1 }}>
            <Typography
              variant="h4"
              color="primary"
              sx={{
                textAlign: "center",
                borderRadius: 2,
              }}
            >
              {icon} Gestion des offres d'emploi
            </Typography>
            <DataGrid
                rows={offers}
                columns={columns}
                pagination
                loading={offers.length === 0}
                rowHeight={38}
                checkboxSelection={false}
                disableSelectionOnClick={true}
                key="offerTableAdmin"
            /> 
          </Box>
        </Box>
      </Box>
    );
  }