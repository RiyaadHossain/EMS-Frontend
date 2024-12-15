import { Row, Col, Typography, Button, Space, Statistic } from "antd";
import { CheckCircleFilled, PlusOutlined } from "@ant-design/icons";
import { USER_ROLE } from "@/enums/userRole";
import { getUserInfo } from "@/helpers/jwt";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyProfile } from "@/queries/profile";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";
import { confirmAttendance, getAttendanceStatus } from "@/queries/attendance";
import toast from "react-hot-toast";

const WelcomeSection = () => {
  const { role } = getUserInfo();
  const isAdmin = role == USER_ROLE.Admin;
  const queryClient = useQueryClient();
  const { isPending: isAttPending, data: attData } = useQuery({
    queryFn: getAttendanceStatus,
    queryKey: [QueryKey.attendance],
  });
  const { isPending, data } = useQuery({
    queryFn: getMyProfile,
    queryKey: [QueryKey.profile],
  });
  const attend = useMutation({
    mutationFn: confirmAttendance,
    onSuccess: (res) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      queryClient.invalidateQueries({ queryKey: [QueryKey.attendance] });
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  if (isPending || isAttPending) return <Loading />;
  const isAttend = attData?.data?.status;

  const attendanceView = () => {
    if (isAttend) {
      return (
        <Button
          icon={<CheckCircleFilled />}
          type="primary"
          disabled
          style={{
            backgroundColor: "#52c41a",
            borderColor: "#52c41a",
            color: "#efefef",
          }}
        >
          Attended
        </Button>
      );
    }

    return (
      <Button
        icon={<PlusOutlined />}
        type="primary"
        onClick={() => attend.mutate()}
      >
        Conform Attendance
      </Button>
    );
  };

  return (
    <Row justify="space-between" align="middle">
      <Col>
        <Typography.Title level={2}>Welcome, {data?.data?.name}</Typography.Title>
      </Col>
      <Col>
        {isAdmin ? (
          <Space>
            <Statistic title="Capital Balance" value={112893} precision={2} />
            <Button
              icon={<PlusOutlined />}
              style={{ marginTop: 16 }}
              type="primary"
              shape="circle"
            />
          </Space>
        ) : (
          attendanceView()
        )}
      </Col>
    </Row>
  );
};

export default WelcomeSection;
